import { Controller, Get, Post, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/testPage/:pageNumber')
  getTestPage(
    @Param ('pageNumber') pageNumber: string): string {
      console.log("In App controller")
      console.log(pageNumber)
    return this.appService.getTestPage(pageNumber);
  }

  @Post()
  postRequest(): boolean{
    return this.appService.postTest();
  }
}
