import {IProduct} from './common';

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  total: number;
}
