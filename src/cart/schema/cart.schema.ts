import { Document } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"


@Schema({ timestamps: true, versionKey: false })
export class Cart extends Document {
     @Prop({ required: true })
     userId: string

     @Prop({ required: true })
     productId: string

     @Prop({ required: true })
     title: string

     @Prop({ required: true })
     price: number

     @Prop({ required: true })
     discount: number

     @Prop({ required: true })
     quantity: number
}

export const CartSchema = SchemaFactory.createForClass(Cart)