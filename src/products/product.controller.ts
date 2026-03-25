import { Controller, Get, Post } from "@nestjs/common";
import { create } from "domain";

@Controller()
export class ProductController{
    constructor(private productService);

}

@Get()
    findAll() {

    }
    findOne(id: number) {

    }
    
@Post()
    create(createProductDto: CreateProductDto);