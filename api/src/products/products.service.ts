import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Products } from 'src/schema/products.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Products.name)
        private productModel: mongoose.Model<Products>,
    ) { }
    async findAllProducts(): Promise<Products[]> {
        const products = await this.productModel.find();
        return products;
    }
    async getProductsByCategory(categoryName:string): Promise<Products[]> {
        const products = await this.productModel.find({ categories: { $in: [categoryName] } });
        // const products = await this.productModel.find();
        return products;
    }
}
