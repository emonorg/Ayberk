import 'dotenv/config';

import Express from 'express';
import CookieParser from 'cookie-parser';
import BodyParser from 'body-parser';

import Controller from './ayberk/interfaces/Controller.interface';
import ErrorHandler from './ayberk/middlewares/ErrorHandler.middleware';
import Logger from './ayberk/Logger';
import Morgan from 'morgan';

export default class App {
  public app: Express.Application;
  constructor(controllers: Controller[], initServices?: any) {
    this.app = Express();

    this.initializeMiddlewares();
    this.initControllers(controllers)

    // Error handler middleware
    this.app.use(ErrorHandler);
  }

  public listen() {    
    this.app.listen(process.env.APP_PORT)
    Logger.showInfoBox();
  }

  private initializeMiddlewares() {
    this.app.use(Morgan('dev'))
    this.app.use(BodyParser.json());
    this.app.use(CookieParser());
  }

  private initControllers(controllers: Controller[]) {
    // Load controllers
    for(let controller of controllers) {
      this.app.use('/api', controller.router)
    }

    // Health check endpoint
    this.app.get('/health-check', (req: Express.Request, res: Express.Response) => {
      return res.json({isUp: true, time: new Date()})
    })
  }
}

