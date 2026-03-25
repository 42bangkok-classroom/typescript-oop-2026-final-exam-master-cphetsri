import { ProductController } from "./product.controller";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService {
    constructor();

    loadProductsFromDataset() {

    }

    findAll(): Product[] {

    }

    findOne(id: number): Product {

    }

    create(createProductDto: CreateProductDto): Product {
        
    }
}