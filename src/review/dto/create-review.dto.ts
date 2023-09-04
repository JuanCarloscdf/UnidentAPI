import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsString()
  @IsNotEmpty()
  mesage: string;
  @IsString()
  @IsNotEmpty()
  userId: string;
}
