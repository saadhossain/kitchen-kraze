import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from 'src/schema/products.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts ():Promise<Products[]>{
    return this.productsService.getAllProducts();
  }
  @Get('category')
  async getProductsByCategory (
    @Query('categoryName') categoryName: string,
  ):Promise<Products[]>{
    return this.productsService.getProductsByCategory(categoryName);
  }
  @Get('featured')
  async getFeaturedProducts (
  ):Promise<Products[]>{
    return this.productsService.getFeaturedProducts();
  }
  @Get(':id')
  async getSingleProduct (
    @Param('id') productId:string
  ):Promise<Products[]>{
    return this.productsService.getSingleProduct(productId);
  }
}
