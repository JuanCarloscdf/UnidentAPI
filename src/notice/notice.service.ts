import { Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notice } from './entities/notice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice) private readonly noticeRepo: Repository<Notice>,
  ) {}

  async create(createNoticeDto: CreateNoticeDto) {
    return await this.noticeRepo.save(createNoticeDto);
  }

  async findAll() {
    return await this.noticeRepo.find();
  }

  async findOne(id: string) {
    const [notice] = await this.noticeRepo.findBy({ id });
    return notice;
  }

  async update(id: string, updateNoticeDto: UpdateNoticeDto) {
    return this.noticeRepo.update(id, updateNoticeDto);
  }

  async remove(id: string) {
    return await this.noticeRepo.delete(id);
  }
}
