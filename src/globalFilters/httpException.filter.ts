import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  constructor(private configService: ConfigService) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); /* request props */
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    console.log(exception);
    const isProduction =
      this.configService.get<string>('nodenv') === 'production';
    this.logger.error(`Exception:${exception.message}, status:${status} `);

    response.status(status).json(
      isProduction
        ? {
            statusCode: status,
            timestamp: new Date().toISOString(),
            message: exception.message,
            description: exception.response,
          }
        : {
            statusCode: status,
            timestamp: new Date().toISOString(),
            description: exception.response,
            message: exception.message,
            stacktrace: exception.stack,
          },
    );
  }
}
