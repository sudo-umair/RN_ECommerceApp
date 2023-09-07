import {SCREENS} from 'common/constants';
import type {RootStackParamList} from './navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREENS.HOME
>;

export type ProductScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREENS.PRODUCTS
>;

export type DescriptionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREENS.DESCRIPTION
>;

export type CartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREENS.CART
>;
