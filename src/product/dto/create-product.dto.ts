import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
     @IsNotEmpty()
     @IsString()
     readonly title: string;
     @IsOptional()
     @IsString()
     readonly picture: string;

     @IsNotEmpty()
     @IsNumber()
     readonly price: number;

     @IsOptional()
     @IsNumber()
     readonly discount: number;

     @IsOptional()
     @IsString()
     readonly discountStartDate: string;

     @IsOptional()
     @IsString()
     readonly discountEndDate: string;

}