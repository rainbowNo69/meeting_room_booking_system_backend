import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { RequireLogin, RequirePermission } from './custom.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aaa')
  @RequireLogin()
  @RequirePermission('ddd')
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
