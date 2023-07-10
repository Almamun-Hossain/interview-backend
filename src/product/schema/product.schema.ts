import { Document } from "mongoose";
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

@Schema({ timestamps: true, versionKey: false })
export class Product extends Document {
     @Prop({ required: true })
     title: string

     @Prop({ required: true })
     slug: string

     @Prop({ default: 'images/DjiPanthom.png' })
     picture: string

     @Prop({ required: true })
     price: number

     @Prop({ default: 0 })
     discount: number

     @Prop({ type: String, default: null })
     discountStartDate: string;

     @Prop({ type: String, default: null })
     discountEndDate: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product)