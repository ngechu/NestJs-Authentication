import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //GET /protected
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }

  //POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() request): any {
    return request.user;
  }
}
