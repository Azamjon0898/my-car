import { ObjectId } from "mongoose";
import {
  ProductStatus,
  ProductCollection,
  ProductSize,
  ProductType,
  ProductBrakes,
  ProductVolume,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productType: ProductType;
  productBrakes: ProductBrakes;
  productVolume: number;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
}
export interface ProductInput {
  productType: any;
  productBrakes: any;
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
