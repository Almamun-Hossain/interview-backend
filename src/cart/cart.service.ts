import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './schema/cart.schema';
import { Model, isValidObjectId } from 'mongoose';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
     constructor(
          @InjectModel(Cart.name) private cartModel: Model<Cart>,
     ) { }

     async findUserCartList(userId: string): Promise<Cart[]> {
          return await this.cartModel.find({ userId: userId });
     }



     async create(cart: CreateCartDto): Promise<Cart> {

          let product: Cart[] = await this.cartModel.find({ userId: cart.userId, productId: cart.productId })
          if (product.length > 0) {
               product.map((item) => {
                    if (item.productId === cart.productId) item.quantity += cart.quantity;
               });
               return await this.cartModel.findByIdAndUpdate(product[0]._id, product[0], {
                    runValidators: true,
                    new: true,

               })
          } else {
               return await this.cartModel.create(cart);
          }
     }

     async updateProductQunatity(id: string, product: UpdateCartDto): Promise<Cart> {
          let isValidId = isValidObjectId(id);
          if (!isValidId) throw new BadRequestException('Invalid Product ID');
          return await this.cartModel.findByIdAndUpdate(id, product, {
               new: true,
               runValidators: true
          });

     }

     async deleteById(id: string): Promise<Cart> {
          let isValidId = isValidObjectId(id);
          if (!isValidId) throw new BadRequestException('Invalid Product ID');

          return await this.cartModel.findByIdAndDelete(id);
     }
}
