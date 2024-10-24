import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users: string[] = [];

  getAllUsers(): string[] {
    return this.users;
  }

  addUser(name: string): string {
    if (!name || name.trim() === '') {
      throw new Error('Invalid user name');
    }
    this.users.push(name);
    return `${name} added successfully`;
  }

  deleteUser(name: string): string {
    const index = this.users.indexOf(name);
    if (index > -1) {
      this.users.splice(index, 1);
      return `${name} deleted successfully`;
    }
    return `User ${name} not found`;
  }
}
