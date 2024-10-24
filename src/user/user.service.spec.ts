import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an empty list of users initially', () => {
    expect(service.getAllUsers()).toEqual([]);
  });

  it('should add a user and return success message', () => {
    const response = service.addUser('John Doe');
    expect(response).toBe('John Doe added successfully');
    expect(service.getAllUsers()).toContain('John Doe');
  });

  it('should throw an error when adding an invalid user', () => {
    expect(() => service.addUser('')).toThrowError('Invalid user name');
  });

  it('should delete a user and return success message', () => {
    service.addUser('Jane Doe');
    const response = service.deleteUser('Jane Doe');
    expect(response).toBe('Jane Doe deleted successfully');
    expect(service.getAllUsers()).not.toContain('Jane Doe');
  });

  it('should return "User not found" if trying to delete a non-existent user', () => {
    const response = service.deleteUser('NonExistentUser');
    expect(response).toBe('User NonExistentUser not found');
  });
});
