import { IsString } from 'class-validator';

export default class SayHelloDto {
  @IsString()
  public message: string;
}
