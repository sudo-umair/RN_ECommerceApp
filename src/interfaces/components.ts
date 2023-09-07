import type {PressableProps, TextStyle, ViewStyle} from 'react-native';
import {IProduct} from './common';
import {ICartItem} from './store';

export interface ButtonProps {
  title?: string;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  pressedStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
  disabled?: boolean;
  dynamic?: boolean;
  rippleConfig?: PressableProps['android_ripple'];
  icon?: JSX.Element;
  onlyIcon?: boolean;
}

export interface IconButtonProps {
  icon: JSX.Element;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  rippleConfig?: PressableProps['android_ripple'];
  counter?: string | number;
}

export interface CartItemProps {
  product: ICartItem;
  onIncrease: () => void;
  onDecrease: () => void;
}

export interface CategoryRowProps {
  title: string;
}

export interface ProductBoxProps {
  product: IProduct;
}
