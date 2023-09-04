import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { AccessTokenGuard } from 'src/auth/guard/access-token.guard';
import { Rol } from 'src/decorators/role';
import { ROLES } from 'src/constants/rol.enum';
import { RoleGuard } from 'src/auth/guard/authorization.guard';
import { Request } from 'express';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }
  @Rol(ROLES.ADMIN)
  @UseGuards(AccessTokenGuard, RoleGuard)
  @Get()
  findAll(@Req() req: Request) {
    const { user } = req.user as any;
    console.log('req :>> ', user.id);
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }

  @Get('userReview/:id')
  findByUser(@Param('id') id: string) {
    return this.reviewService.findByUserId(id);
  }
}
