import { Response } from 'express';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger, } from '@nestjs/common';

@Catch()
export class HttpExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionsFilter.name);

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception.name === 'HttpException'
        ? (exception as HttpException).getStatus()
        : 500;

    const message =
      exception.name === 'HttpException' ? exception.message : 'Internal Error';

    this.logger.error(exception.message, exception.stack);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }
}
