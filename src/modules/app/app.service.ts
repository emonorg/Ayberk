import HttpException from '../../utils/ayberk/exceptions/HttpException';

export default class AppService {

  // Define the service's methods here

  public async sayHello(): Promise<string> {

    // Simply return strings, objects, etc.
    return 'Hello world!';
  }

  // Returning object sample
  public async returnObject(): Promise<object> {
    return {
      foo: 'bar',
    };
  }

  // Throwing error sample
   public throwError(): void {
    throw new HttpException(500, 'Something went wrong!');
  }
}
