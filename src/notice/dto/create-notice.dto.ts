import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNoticeDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}
