import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { json } from 'stream/consumers';

export class UnLoginException{
  message: string;
  constructor(message?) {
    this.message = message;
  }
}

@Catch(UnLoginException)
export class UnloginFilter<T> implements ExceptionFilter {
  catch(exception: UnLoginException, host: ArgumentsHost) {
    console.log('UnloginFilter');
    const response = host.switchToHttp().getResponse();
    response.json({
      code:HttpStatus.UNAUTHORIZED,
      message:'fail',
      data:exception.message||'用户未登录'
    })
  }
}
