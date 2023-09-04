import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { hash, genSalt } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async create(createUserData: CreateUserDto) {
    try {
      const [existingUser] = await this.userRepo.findBy({
        email: createUserData.email,
      });
      const salt = await genSalt();
      createUserData.password = await hash(createUserData.password, salt);
      const user = await this.userRepo.save(createUserData);
      delete user.password;
      return user;
    } catch (error) {
      console.log('Error during user creation', error.code);
      this.errorServiceHandler(error);

      throw new Error('Unexpected error during user creation.');
    }
  }

  async findAll() {
    return this.userRepo.find();
  }

  async findOne(id: string) {
    try {
      const [user] = await this.userRepo.findBy({ id });
      if (!user) {
        console.log('dasdasda');
        return new NotFoundException();
      }
      return user;
    } catch (error) {
      console.log('Error during user creation', error.message);

      this.errorServiceHandler(error);
      throw new Error('Unexpected error finding user.');
    }
  }

  async update(id: string, updateUserData: UpdateUserDto) {
    try {
      return await this.userRepo.update(id, updateUserData);
    } catch (error) {
      this.errorServiceHandler(error);

      throw new Error('Unexpected error updating user.');
    }
  }

  async remove(id: string) {
    try {
      return await this.userRepo.delete(id);
    } catch (error) {
      this.errorServiceHandler(error);

      throw new Error('Unexpected error deleting user.');
    }
  }

  async userDataFinder(email: CreateUserDto['email']) {
    try {
      return await this.userRepo
        .createQueryBuilder('user')
        .select([
          'user.password',
          'user.rol',
          'user.first_name',
          'user.cellphone',
          'user.id',
        ])
        .where('user.email = :email', { email })
        .getOne();
    } catch (error) {
      this.errorServiceHandler(error);

      throw new Error('Unexpected error finding user userDataFinder.');
    }
  }

  async uploadAvatar(file: Express.Multer.File, id: string) {
    try {
      const [user] = await this.userRepo.findBy({ id });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      user.image = file.filename;
      return this.userRepo.update(id, user);
    } catch (error) {
      this.errorServiceHandler(error);
      throw new Error('Unexpected error during user avatar creation.');
    }
  }

  private errorServiceHandler(error: any) {
    if (error instanceof QueryFailedError) {
      throw new ConflictException(error.driverError.sqlMessage);
    }
  }
}
