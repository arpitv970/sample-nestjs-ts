# Stage 1: Build the app
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN npm run build

# Stage 2: Run the app
FROM node:18-alpine

# Set the working directory for the final container
WORKDIR /usr/src/app

# Copy the build files from the first stage (builder)
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./

# Expose the application port
EXPOSE 3000

# Command to run the NestJS app
CMD ["npm", "run", "start:prod"]
