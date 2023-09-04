import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './globalFilters/httpException.filter';
import { AllExceptionFilter } from './globalFilters/allExceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);

  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new AllExceptionFilter(httpAdapterHost),
    new HttpExceptionFilter(configService),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const port = configService.get<number>('port');
  await app.listen(port);
  Logger.log(`Aplication is running on: ${await app.getUrl()}`);
}
bootstrap();
