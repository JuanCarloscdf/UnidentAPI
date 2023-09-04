import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentDto } from './create-appointment.dto';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {
  @IsString()
  @IsOptional()
  userId: string;
  @IsDate()
  @IsOptional()
  date: Date;
  @IsString()
  @IsOptional()
  evaluation: string;
  @IsString()
  @IsOptional()
  hour: string;
  @IsNumber()
  @IsOptional()
  paid: number;
  @IsNumber()
  @IsOptional()
  total: number;
  @IsNumber()
  @IsOptional()
  apptNumber: number;
}
