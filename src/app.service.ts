import { Injectable } from '@nestjs/common';
import { ProductService } from './modules/product/product.service';
import { Product } from './types/product';

@Injectable()
export class AppService {
  constructor(
    private readonly productService: ProductService
  ) {}

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

  getProduct() : Product {
    return this.productService.getProduct();
  }
}
