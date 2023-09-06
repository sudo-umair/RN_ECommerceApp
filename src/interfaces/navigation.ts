import {SCREENS} from 'common/constants';
import {IProduct} from './common';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PRODUCTS]: {
    category: string;
  };
  [SCREENS.DESCRIPTION]: {
    product: IProduct;
  };
};
