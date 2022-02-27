import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';
import sendResponse from '../ResponseBuilder';
import ResponseType from '../types/Response.type';

/**
 * This middleware catches HttpException and sends it as response to client
 * @param error: HttpException
 * @param request: Express request
 * @param response: Express response
 */
export default function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction): void {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  sendResponse(response, status, new ResponseType({
    success: false,
    message,
  }));
}
