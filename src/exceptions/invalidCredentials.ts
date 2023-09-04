import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentials extends HttpException {
  constructor() {
    super('invalid credentials from execption', HttpStatus.UNAUTHORIZED);
  }
}
