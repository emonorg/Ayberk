import {Response} from 'express';
import ResponseType from './types/Response';

export default function sendResponse(response: Response, statusCode: number, responseData: ResponseType): any {
  return response.status(statusCode).json(responseData);
}
