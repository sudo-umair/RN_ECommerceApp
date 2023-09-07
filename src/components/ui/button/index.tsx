import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {ButtonProps} from 'interfaces/components';
import {Colors} from 'common/styles';

const Button = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  dynamic = true,
  rippleConfig,
  disabledStyle,
  pressedStyle,
  icon,
  onlyIcon,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      android_ripple={
        rippleConfig ?? {
          color: Colors.ButtonPrimaryBackgroundRipple,
        }
      }
      style={({pressed}) => [
        styles.container,
        icon && styles.containerWithIcon,
        style,
        disabled && [styles.disabled && disabledStyle],
        Platform.OS === 'ios' &&
          dynamic &&
          pressed && [styles.pressed, pressedStyle],
      ]}>
      {onlyIcon || (
        <Text style={[styles.buttonText, textStyle]}>{title ?? 'Button'}</Text>
      )}
      {icon && icon}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ButtonPrimaryBackground,
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    minHeight: 40,
    minWidth: 100,
    shadowColor: Colors.Black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  containerWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: Colors.ButtonPrimaryBackgroundPressed,
  },
  disabled: {
    backgroundColor: Colors.ButtonPrimaryBackgroundDisabled,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.ButtonPrimaryText,
    textAlign: 'center',
  },
});
