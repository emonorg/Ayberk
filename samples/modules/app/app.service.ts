import HttpException from '../../../src/ayberk/exceptions/HttpException';
import SayHelloDto from './DTOs/sayHello.dto';

export default class AppService {

  // Define the service's methods here

  public async sayHello(sayHelloDto: SayHelloDto): Promise<string> {
    if (sayHelloDto.message === 'Hello') {
      return 'Hello world!';
    } else {
      return 'Unknown message!';
    }
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
