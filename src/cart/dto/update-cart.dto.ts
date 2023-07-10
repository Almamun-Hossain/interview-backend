import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator"

export class UpdateCartDto {
     @IsOptional()
     @IsString()
     readonly userId: string

     @IsOptional()
     @IsString()
     readonly productId: string

     @IsOptional()
     @IsString()
     readonly title: string

     @IsOptional()
     @IsNumber()
     readonly price: number

     @IsOptional()
     @IsNumber()
     readonly discount: number

     @IsOptional()
     @IsNumber()
     readonly quantity: number
}

