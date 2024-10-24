import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an empty list of users initially', () => {
    jest.spyOn(service, 'getAllUsers').mockReturnValue([]);
    expect(controller.getAllUsers()).toEqual([]);
  });

  it('should add a user and return success message', () => {
    jest
      .spyOn(service, 'addUser')
      .mockReturnValue('John Doe added successfully');

    // Here, pass the string 'John Doe' instead of an object
    expect(controller.addUser('John Doe')).toBe('John Doe added successfully');
  });

  it('should delete a user and return success message', () => {
    jest
      .spyOn(service, 'deleteUser')
      .mockReturnValue('Jane Doe deleted successfully');

    // Pass the string 'Jane Doe' instead of an object
    expect(controller.deleteUser('Jane Doe')).toBe(
      'Jane Doe deleted successfully',
    );
  });
});
