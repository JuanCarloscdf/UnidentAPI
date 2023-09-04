import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOfferingDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsString()
  @IsNotEmpty()
  message: string;
}
