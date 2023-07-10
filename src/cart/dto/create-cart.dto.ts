import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCartDto {
     @IsNotEmpty()
     @IsString()
     readonly userId: string

     @IsNotEmpty()
     @IsString()
     readonly productId: string

     @IsNotEmpty()
     @IsString()
     readonly title: string

     @IsNotEmpty()
     @IsNumber()
     readonly price: number

     @IsNotEmpty()
     @IsNumber()
     readonly discount: number

     @IsNotEmpty()
     @IsNumber()
     readonly quantity: number
}

