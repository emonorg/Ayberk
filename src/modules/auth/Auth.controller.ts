import { Router, Request, Response, NextFunction } from 'express';
import Controller from 'src/utils/interfaces/Controller.interface';

export default class AuthController implements Controller {
  public path = '/auth';
  public router: Router = Router();
  public service: any;

  constructor(authService: any) {
    this.service = new authService();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(`${this.path}/register`, this.registration);
  }

  private registration = async (request: Request, response: Response, next: NextFunction) => {
    response.send('hey');
  }
}
