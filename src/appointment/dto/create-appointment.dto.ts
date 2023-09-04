import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsDateString()
  @IsNotEmpty()
  date: Date;
  @IsString()
  @IsNotEmpty()
  evaluation: string;
  @IsString()
  @IsNotEmpty()
  hour: string;
  @IsNumber()
  @IsNotEmpty()
  paid: number;
  @IsNumber()
  @IsNotEmpty()
  total: number;
  @IsNumber()
  @IsNotEmpty()
  apptNumber: number;
}
