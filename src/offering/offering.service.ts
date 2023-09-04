import { Injectable } from '@nestjs/common';
import { CreateOfferingDto } from './dto/create-offering.dto';
import { UpdateOfferingDto } from './dto/update-offering.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offering } from './entities/offering.entity';

@Injectable()
export class OfferingService {
  constructor(
    @InjectRepository(Offering)
    private readonly offeringRepo: Repository<Offering>,
  ) {}

  create(createOfferingDto: CreateOfferingDto) {
    return this.offeringRepo.save(createOfferingDto);
  }

  findAll() {
    return this.offeringRepo.find();
  }

  findOne(id: string) {
    return this.offeringRepo.findBy({ id });
  }

  update(id: string, updateOfferingDto: UpdateOfferingDto) {
    return this.offeringRepo.update(id, updateOfferingDto);
  }

  remove(id: string) {
    return this.offeringRepo.delete(id);
  }
}
