
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, BadRequestException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    console.log(exception);

    if (exception instanceof BadRequestException) {
      const errorResponse = exception.getResponse();
      return response.status(400).json(errorResponse)

    }

    return response
      .status(500)
      .json({
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
