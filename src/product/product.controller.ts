import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Query as ExpressQuery } from 'express-serve-static-core'

@Controller('products')
export class ProductController {

     constructor(private productService: ProductService) { }

     @Get()
     async findAll(@Query() query: ExpressQuery): Promise<Product[]> {
          return await this.productService.findAll(query);
     }

     @Get(":id")
     async findOne(@Param('id') id: string): Promise<Product> {
          return await this.productService.getProductById(id);
     }

     @Post()
     async create(@Body() product: CreateProductDto): Promise<Product> {
          return await this.productService.createProduct(product);

     }

     @Put(':id')
     async udpate(@Param('id') id: string, @Body() product: UpdateProductDto): Promise<Product> {
          return await this.productService.updateProduct(id, product);
     }

     @Delete(':id')
     async delete(@Param('id') id: string): Promise<Product> {
          return await this.productService.deleteProduct(id);
     }

}
