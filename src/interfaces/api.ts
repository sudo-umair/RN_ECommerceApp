import {ICategories, IProduct} from './common';
import {AxiosResponse} from 'axios';

export type IFetchCategoriesRes = AxiosResponse<ICategories>;

export type IFetchProductsForCategoryReq = {
  category: string;
};
export type IFetchProductsForCategoryRes = AxiosResponse<{
  products: IProduct[];
}>;
