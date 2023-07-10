import { Body, Controller, Delete, Get, Post, Param, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from "./schema/cart.schema"
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('carts')
export class CartController {

     constructor(private cartService: CartService) { }

     @Get(":userId")
     async findAll(@Param('userId') userId: string): Promise<Cart[]> {
          return await this.cartService.findUserCartList(userId);
     }

     @Post()
     async create(@Body() cart: CreateCartDto): Promise<Cart> {
          return await this.cartService.create(cart);
     }

     @Put(":id")
     async update(@Param('id') id: string, @Body() product: UpdateCartDto): Promise<Cart> {
          return await this.cartService.updateProductQunatity(id, product);
     }

     @Delete(":id")
     async delete(@Param('id') id: string): Promise<Cart> {
          return await this.cartService.deleteById(id);
     }
}
