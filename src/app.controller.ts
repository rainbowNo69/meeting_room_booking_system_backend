import { Controller, Get, Request, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aaa')
  @SetMetadata('require-login', true)
  @SetMetadata('require-permission', ['ddd'])
  aaaa(@Request() req) {
    console.log('rrrr', req.user);
    return 'aaa';
  }

  @Get('bbb')
  bbb() {
    return 'bbb';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
