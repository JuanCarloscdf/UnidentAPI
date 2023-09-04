import { Module } from '@nestjs/common';
import { OfferingService } from './offering.service';
import { OfferingController } from './offering.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offering } from './entities/offering.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Offering])],
  controllers: [OfferingController],
  providers: [OfferingService],
})
export class OfferingModule {}
