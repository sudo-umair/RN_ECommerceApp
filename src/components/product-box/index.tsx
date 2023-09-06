import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProductBoxProps} from 'interfaces/components';
import {Colors, FontSizes} from 'common/styles';
import {useNavigation} from '@react-navigation/native';
import {ProductScreenProps} from 'interfaces/screens';
import {SCREENS} from 'common/constants';

type Navigation = ProductScreenProps['navigation'];

const ProductBox: React.FC<ProductBoxProps> = ({product}) => {
  const navigation = useNavigation<Navigation>();

  const goToDescriptionScreen = () => {
    navigation.navigate(SCREENS.DESCRIPTION, {product});
  };
  return (
    <Pressable onPress={goToDescriptionScreen} style={styles.container}>
      <Image
        source={{
          uri: product.thumbnail,
        }}
        style={styles.thumbnail}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        {product.title} ({product.rating}/5)
      </Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.NeutralBackground,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
  },
  thumbnail: {
    height: 100,
    aspectRatio: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: FontSizes.Medium,
    color: Colors.Black,
    textAlign: 'center',
    marginTop: 5,
  },
  brand: {
    fontSize: FontSizes.Small,
    color: Colors.Black,
    textAlign: 'center',
  },
  price: {
    fontSize: FontSizes.Medium,
    color: Colors.Error,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
