import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTestPage(pageNum: string): string{
    console.log("In App service")
    console.log(pageNum)
    return `Page Number is ${pageNum}`
  }

  postTest(): boolean{
    console.log('Post request')
    return(true)
  }
}
