import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ROLES } from 'src/constants/rol.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @IsNotEmpty()
  last_name: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  cellphone: string;
  @IsEnum(ROLES)
  @IsOptional()
  rol: ROLES;
  @IsString()
  @IsOptional()
  image: string;
}
