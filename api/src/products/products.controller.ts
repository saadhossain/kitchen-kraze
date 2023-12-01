import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from 'src/schema/products.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts ():Promise<Products[]>{
    return this.productsService.findAllProducts();
  }
  @Get('category')
  async getProductsByCategory (
    @Query('categoryName') categoryName: string,
  ):Promise<Products[]>{
    return this.productsService.getProductsByCategory(categoryName);
  }
}
