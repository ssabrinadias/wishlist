import { IProduct } from './products';

export interface IResponseWishlist {
  userId: number;
  products: IProduct[];
}
