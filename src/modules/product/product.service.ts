
import { Injectable } from "@nestjs/common";

import { Product } from "src/types/product";

@Injectable()
export class ProductService {
    getProduct() : Product {
        return {
            sku: '1234',
            name: 'Titos Vodka'
        }
    }
}