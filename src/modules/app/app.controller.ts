import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../utils/ayberk/interfaces/Controller.interface';
import sendResponse from '../../utils/ayberk/ResponseBuilder';
import ResponseType from '../../utils/ayberk/types/Response';
import AppService from './app.service';

export default class AppController implements Controller {
  public router: Router = Router();
  /**
   * Define the base path (base route) of the controller by defining 'path' variable
   */
  public path = '/app';

  constructor(private appService: AppService) {
    this.initializeRoutes();
  }

  /**
   * Define the sub-routes (with methods) inside this function
   */
  private initializeRoutes(): void {
    this.router.post(`${this.path}/say-hello`, this.sayHello);
  }

  /**
   * Define the controller's methods here
   * Example: sayHello() [Check below]
   */

  /**
   * sayHello returns hello to the client
   * @param request Express request
   * @param response Express response
   * @returns Response to the client
   */
  private sayHello = async (request: Request, response: Response, next: NextFunction) => {
    /**
     * You have access to Express' Request, Response and NextFunction inside a controller method
     * Use 'sendResponse()' to respond to the client
     *    - Params:
     *      1. response: Express.Response
     *      2. statusCode: number
     *      3. responseData: ResponseType
     *         [*] You can modify ResponseType class to change the response template of the whole project
     *         [*] If the returned data from service layer contains data (payload), use the data field of ResponseType [OPTIONAL]
     */
    return sendResponse(response, 200, new ResponseType({
      success: true,
      message: await this.appService.sayHello(),
    }, await this.appService.returnObject()));
    /**
     * You can send responses by using express default properties.
     * Example:
     *    - return response.send();
     */

    /* Error handling:
    [NOTE]: Always use try/catch in controller layer to be able to handle the service's errors
    try {
      this.appService.throwError();
    } catch (err) {
      next(err);
    } */
  }
}
