import { PartialType } from '@nestjs/mapped-types';
import { CreateNoticeDto } from './create-notice.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateNoticeDto extends PartialType(CreateNoticeDto) {
  @IsString()
  @IsOptional()
  message: string;
}
