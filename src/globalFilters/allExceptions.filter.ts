import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);

  constructor(private httpAdapterHost: HttpAdapterHost) {}
  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

    this.logger.error(
      `Exception: ${exception.message}, stack: ${exception.stack}`,
    );

    const responseBody = {
      status: httpStatus,
      message: 'internal server error T_T',
    };
    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
