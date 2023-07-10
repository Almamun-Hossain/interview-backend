import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Product } from './schema/product.schema';
import { Model, isValidObjectId } from 'mongoose'
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Query } from 'express-serve-static-core';

@Injectable()
export class ProductService {
     constructor(
          @InjectModel(Product.name)
          private productModel: Model<Product>,
     ) { }

     /**
      * * Find All products
      * @returns Product[]
      */

     async findAll(query: Query): Promise<Product[]> {
          let perPage = Number(query.perPage) || 10;
          let currentPage = Number(query.page) || 1;

          let skip = perPage * (currentPage - 1);

          const search = query.search ? {
               title: {
                    $regex: query.search,
                    $options: 'i'
               }
          } : {};

          const totalProduct = await this.productModel.find().count();
          const products = await this.productModel.find({ ...search }).limit(perPage).skip(skip);


          return products
     }

     /**
      * * Find product by id
      * @param id 
      * @returns Product
      */
     async getProductById(id: string): Promise<Product> {
          let isValidId = isValidObjectId(id);
          if (!isValidId) throw new BadRequestException('Invalid Product ID');
          const product = await this.productModel.findById(id).exec();;
          if (!product) throw new NotFoundException('Product not found');
          return product;
     }

     /**
      * * Create product
      * @param product 
      * @returns Product
      */
     async createProduct(product: CreateProductDto): Promise<Product> {
          return this.productModel.create(product);
     }


     /**
      * * Update existing product
      * @param id 
      * @param product 
      * @returns 
      */
     async updateProduct(id: string, product: UpdateProductDto): Promise<Product> {

          return await this.productModel.findByIdAndUpdate(id, product, {
               new: true,
               runValidators: true
          })
     }

     /**
      * * Delete Product by Id
      * @param id {string}
      * @returns {Product}
      */
     async deleteProduct(id: string): Promise<Product> {
          let isValidId = isValidObjectId(id)
          if (!isValidId) throw new BadRequestException('Invalid Product ID');
          const porduct = await this.productModel.findById(id);
          if (!porduct) throw new NotFoundException('Product not found');
          return await this.productModel.findByIdAndDelete(id);
     }
}
