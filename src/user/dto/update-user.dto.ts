import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ROLES } from 'src/constants/rol.enum';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  first_name: string;
  @IsString()
  @IsOptional()
  last_name: string;
  @IsString()
  @IsOptional()
  password: string;
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  cellphone: string;
  @IsEnum(ROLES)
  @IsOptional()
  rol: ROLES;
  @IsString()
  @IsOptional()
  image: string;
}
