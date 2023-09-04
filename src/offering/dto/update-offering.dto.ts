import { PartialType } from '@nestjs/mapped-types';
import { CreateOfferingDto } from './create-offering.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateOfferingDto extends PartialType(CreateOfferingDto) {
  @IsUUID()
  @IsOptional()
  user_id: string;
  @IsString()
  @IsOptional()
  title: string;
  @IsString()
  @IsOptional()
  image: string;
  @IsString()
  @IsOptional()
  message: string;
}
