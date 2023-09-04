import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfig, TypeOrmConfig } from './config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { OfferingModule } from './offering/offering.module';
import { ReviewModule } from './review/review.module';
import { NoticeModule } from './notice/notice.module';
import { AppointmentModule } from './appointment/appointment.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig, TypeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    OfferingModule,
    ReviewModule,
    NoticeModule,
    AppointmentModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
