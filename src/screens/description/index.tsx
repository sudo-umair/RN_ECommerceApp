import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {DescriptionScreenProps} from 'interfaces/screens';
import {capitalize, ratingFormatter} from 'helpers/text-formatters';
import {Colors, FontSizes} from 'common/styles';
import Button from 'components/ui/button';
import {useAppDispatch, useAppSelector} from 'store/redux';
import {addToCart} from 'store/cart.slice';
import {useToast} from 'react-native-toast-notifications';
import {ShoppingCart} from 'react-native-feather';
import IconButton from 'components/ui/icon-button';
import {SCREENS} from 'common/constants';

const DescriptionScreen: React.FC<DescriptionScreenProps> = ({
  navigation,
  route,
}) => {
  const product = route.params.product;

  const {totalProducts} = useAppSelector(state => state.cart);

  const toast = useToast();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: capitalize(product.title),
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <IconButton
          counter={totalProducts}
          rippleConfig={{color: Colors.PrimaryAccent}}
          icon={<ShoppingCart color={Colors.PrimaryText} />}
          onPress={() => navigation.navigate(SCREENS.CART)}
        />
      ),
    });
  }, [navigation, product, totalProducts]);

  const handleAddToCart = () => {
    dispatch(addToCart({...product, quantity: 1}));
    toast.show('Added to cart', {
      type: 'success',
    });
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Image
        source={{uri: product.thumbnail}}
        resizeMode="cover"
        style={styles.thumbnail}
      />
      <Text style={styles.title}>{capitalize(product.title)}</Text>
      <View style={styles.box}>
        <Text style={styles.label}>Brand</Text>
        <Text style={styles.value}>{capitalize(product.brand)}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Price</Text>
        <Text style={[styles.value, {color: Colors.Error}]}>
          ${product.price}
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{product.description}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Rating</Text>
        <Text style={styles.value}>{ratingFormatter(product.rating)}</Text>
      </View>
      <Button
        icon={<ShoppingCart stroke={Colors.White} width={20} height={20} />}
        title="Add to Cart"
        onPress={handleAddToCart}
        style={styles.button}
      />
    </View>
  );
};

export default DescriptionScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.PrimaryBackground,
    padding: 10,
    alignItems: 'center',
  },
  thumbnail: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  title: {
    fontSize: FontSizes.Heading,
    fontWeight: 'bold',
    color: Colors.Black,
    marginTop: 10,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'column',
    alignContent: 'center',
  },
  label: {
    fontSize: FontSizes.Medium,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  value: {
    fontSize: FontSizes.Large,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    paddingHorizontal: 20,
  },
  cartButton: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});
