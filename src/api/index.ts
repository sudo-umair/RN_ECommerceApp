import axios from 'axios';
import type {
  IFetchCategoriesRes,
  IFetchProductsForCategoryReq,
  IFetchProductsForCategoryRes,
} from 'interfaces/api';

const baseURL = 'https://dummyjson.com';

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCategories = async (): Promise<IFetchCategoriesRes> => {
  return axiosClient.get('/products/categories');
};

export const fetchProductsForCategory = async ({
  category,
}: IFetchProductsForCategoryReq): Promise<IFetchProductsForCategoryRes> => {
  return axiosClient.get(`/products/category/${category}`);
};
