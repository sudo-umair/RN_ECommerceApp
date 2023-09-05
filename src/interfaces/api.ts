import {ICategories} from './common';
import {AxiosResponse} from 'axios';

export type IFetchCategoriesRes = AxiosResponse<ICategories>;
