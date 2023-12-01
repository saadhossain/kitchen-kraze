import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
import { Products } from 'src/schema/products.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Products.name)
        private productModel: mongoose.Model<Products>,
    ) { }
    async getAllProducts(): Promise<Products[]> {
        const products = await this.productModel.find();
        return products;
    }
    async getSingleProduct(productId:string): Promise<Products[]> {
        const query = { _id: new ObjectId(productId) }
        const product = await this.productModel.find(query);
        return product;
    }

    async getProductsByCategory(categoryName:string): Promise<Products[]> {
        const products = await this.productModel.find({ categories: { $in: [categoryName] } });
        return products;
    }
    async getFeaturedProducts(): Promise<Products[]> {
        const products = await this.productModel.find({ isFeatured: true});
        return products;
    }
}
