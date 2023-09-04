import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private readonly reviewRepo: Repository<Review>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    console.log('createRe :>> ', createReviewDto);

    const [user] = await this.userRepo.findBy({ id: createReviewDto.userId });
    if (!user) {
      return new UnauthorizedException('czxczxc');
    }
    const review = new Review();
    review.image = createReviewDto.image;
    review.mesage = createReviewDto.mesage;
    review.user = user;
    return await this.reviewRepo.save(review);
  }

  async findAll() {
    return await this.reviewRepo.find();
  }

  async findOne(id: string) {
    const [review] = await this.reviewRepo.findBy({ id });
    return review;
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.reviewRepo.update(id, updateReviewDto);
  }

  async remove(id: string) {
    return await this.reviewRepo.delete(id);
  }

  async findByUserId(id: string) {
    return await this.reviewRepo
      .createQueryBuilder('review')
      .where('review.userId = :id', { id })
      .getMany();
  }
}
