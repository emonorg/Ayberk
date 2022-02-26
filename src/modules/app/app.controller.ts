import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../utils/interfaces/Controller.interface';
import sendResponse from '../../utils/ResponseBuilder';
import ResponseType from '../../utils/types/Response';
import AppService from './app.service';

export default class AppController implements Controller {
  public path = '/app';
  public router: Router = Router();

  constructor(private appService: AppService) {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(`${this.path}/say-hello`, this.sayHello);
  }

  private sayHello = async (request: Request, response: Response, next: NextFunction) => {
    return sendResponse(response, 200, new ResponseType({
      success: true,
      message: await this.appService.sayHello(),
    }));
  }
}
