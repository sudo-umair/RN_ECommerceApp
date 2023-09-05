import type {PressableProps, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
  title: string;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  pressedStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
  disabled?: boolean;
  dynamic?: boolean;
  rippleConfig?: PressableProps['android_ripple'];
}

export interface CategoryRowProps {
  title: string;
}
