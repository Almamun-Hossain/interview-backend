import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductDto {
     @IsOptional()
     @IsString()
     readonly title: string;
     @IsOptional()
     @IsString()
     readonly picture: string;
     @IsOptional()
     @IsNumber()
     readonly price: number;

     @IsOptional()
     @IsNumber()
     readonly discount: number;

     @IsOptional()
     @IsDate()
     readonly discountStartDate: Date;
     
     @IsOptional()
     @IsDate()
     readonly discountEndDate: Date;
}