import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InvalidCredentials } from 'src/exceptions/invalidCredentials';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(createAuthData: CreateAuthDto) {
    try {
      const user = await this.userService.userDataFinder(createAuthData.email);
      if (!user) {
        return new InvalidCredentials();
      }

      if (!(await compare(createAuthData.password, user.password))) {
        return new UnauthorizedException('Password is not correct');
      }
      delete user.password;
      const token = this.jwtService.sign({ user });
      return token;
    } catch (error) {
      console.log(error);
    }
  }
}
