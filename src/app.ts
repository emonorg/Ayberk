import 'dotenv/config';

import Express from 'express';
import CookieParser from 'cookie-parser';
import BodyParser from 'body-parser';

import Controller from './utils/interfaces/Controller.interface';
import ErrorHandler from './utils/middlewares/ErrorHandler';
import Logger from './utils/Logger';
import Morgan from 'morgan';

import MongoHandler from './database/mongo.database';

export default class App {
  public app: Express.Application;
  constructor(controllers: Controller[]) {
    this.app = Express();
  
    /**
     * Initiate services (e.g. Databases, Message Brokers, CronJobs) here
     */
    new MongoHandler()

    this.initializeMiddlewares();
    this.initControllers(controllers)
  }

  public listen() {    
    this.app.listen(process.env.APP_PORT)
    Logger.showInfoBox();
  }

  private initializeMiddlewares() {
    this.app.use(BodyParser.json());
    this.app.use(CookieParser());
    this.app.use(ErrorHandler);
    this.app.use(Morgan('dev'))
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

