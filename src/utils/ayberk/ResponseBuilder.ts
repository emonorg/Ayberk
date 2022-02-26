import { Response } from 'express';
import ResponseType from './types/Response';

/**
 * Handles the delivery of response to the client
 * @param response: Express response
 * @param statusCode: number (HTTP STATUS CODE)
 * @param responseData: ResponseType
 */
export default function sendResponse(response: Response, statusCode: number, responseData: ResponseType): void {
  response.status(statusCode).json(responseData);
}
