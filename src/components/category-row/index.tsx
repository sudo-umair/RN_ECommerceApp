import {StyleSheet} from 'react-native';
import React from 'react';
import {CategoryRowProps} from 'interfaces/components';
import {Colors, FontSizes} from 'common/styles';
import Button from 'components/ui/button';
import {useNavigation} from '@react-navigation/native';
import type {HomeScreenProps} from 'interfaces/screens';
import {SCREENS} from 'common/constants';

type Navigation = HomeScreenProps['navigation'];

const CategoryRow: React.FC<CategoryRowProps> = ({title}) => {
  const navigation = useNavigation<Navigation>();

  const handleOnPress = () => {
    navigation.navigate(SCREENS.PRODUCTS, {
      category: title,
    });
  };

  return (
    <Button
      onPress={handleOnPress}
      style={styles.container}
      textStyle={styles.title}
      pressedStyle={styles.pressed}
      rippleConfig={{
        color: Colors.ButtonSecondaryBackgroundRipple,
      }}
      title={title.replace('-', ' ')}
    />
  );
};

export default CategoryRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.ButtonSecondaryBackground,
    padding: 8,
    borderRadius: 5,
  },
  pressed: {
    backgroundColor: Colors.ButtonSecondaryBackgroundPressed,
  },
  title: {
    textTransform: 'capitalize',
    fontSize: FontSizes.Heading,
    color: Colors.White,
  },
});
