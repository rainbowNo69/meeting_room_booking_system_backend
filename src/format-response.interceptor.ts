import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { map, Observable } from 'rxjs';

@Injectable()
export class FormatResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse<Response>();
    //抛出的异常还是由内置的 Exception Filter 来处理,不在此被处理
    return next.handle().pipe(
      map((data) => {
        // console.log('111', {
        //   code: response.statusCode,
        //   message: 'success',
        //   data,
        // });
        return {
          code: response.statusCode,
          message: 'success',
          data,
        };
      }),
    );
  }
}
