import {SCREENS} from 'common/constants';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PRODUCTS]: {
    category: string;
  };
};
