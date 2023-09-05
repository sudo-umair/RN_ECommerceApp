import axios from 'axios';
import type {IFetchCategoriesRes} from 'interfaces/api';

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
