import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Products {
    @Prop()
    name: string;
    @Prop()
    isFeatured: boolean;
    @Prop()
    shortDescription: string;
    @Prop()
    description: string;
    @Prop()
    inStock: number;
    @Prop()
    weight: number;
    @Prop()
    length: number;
    @Prop()
    width: number;
    @Prop()
    height: number;
    @Prop()
    salePrice: number;
    @Prop()
    regularPrice: number;
    @Prop()
    categories: [];
    @Prop()
    images: [];
    @Prop()
    reviews: []
}
export const ProductsSchema = SchemaFactory.createForClass(Products);