import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Appointment } from '../appointment/entities/appointment.entity';
import { ROLES } from 'src/constants/rol.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UserController', () => {
  let controller: UserController;
  let mockUserService = {
    create: jest.fn((dto) => {
      return {
        id: `${Math.random() * (1000 - 1) + 1} - asdasdasfffff`,
        ...dto,
      };
    }),
    update: jest.fn((id: string, updateDto) => {
      return {
        generatedMaps: [],
        raw: [],
        affected: 1,
      };
    }),
  };
  let appointmentMock = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(Appointment),
          useValue: appointmentMock,
        },
      ],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      first_name: 'juan carlos',
      last_name: 'mamani rojas',
      password: '123456',
      email: 'juantest@juantest.com',
      cellphone: '7308037221',
      rol: ROLES.ADMIN,
      image: '',
    };
    expect(await controller.create(createUserDto)).toEqual({
      ...createUserDto,
      id: expect.any(String),
    });
  });

  it('update user', async () => {
    const updateUserData: UpdateUserDto = {
      first_name: 'juan carlos',
      last_name: 'mamani rojas',
      password: '123456',
      email: 'juantest@juantest.com',
      cellphone: '7308037221',
      rol: ROLES.ADMIN,
      image: '',
    };
    const id = 'b06b14e7-4b89-48e5-ae6e-dda23ba060fb';

    expect(await controller.update(id, updateUserData)).toEqual({
      generatedMaps: [],
      raw: [],
      affected: 1,
    });
  });
});
