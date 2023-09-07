import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../button';
import {IconButtonProps} from 'interfaces/components';
import {Colors, FontSizes} from 'common/styles';

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  disabled,
  rippleConfig,
  style,
  counter,
}) => {
  return (
    <>
      <View style={[styles.root, style]}>
        <Button
          onPress={onPress}
          rippleConfig={rippleConfig}
          disabled={disabled}
          style={styles.button}
          onlyIcon
          icon={icon}
        />
      </View>
      {counter ? <Text style={styles.counter}>{counter}</Text> : null}
    </>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'transparent',
    elevation: 0,
    minWidth: 5,
    minHeight: 5,
  },
  counter: {
    position: 'absolute',
    right: 0,
    top: 0,
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: 15,
    fontSize: FontSizes.Medium,
    fontWeight: 'bold',
    color: Colors.White,
    backgroundColor: Colors.Error,
  },
});
