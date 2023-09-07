import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {CartScreenProps} from 'interfaces/screens';
import {Colors, FontSizes} from 'common/styles';
import {useAppDispatch, useAppSelector} from 'store/redux';
import CartItem from 'components/cart-item';
import ListEmpty from 'components/ui/list-empty';
import {ICartItem} from 'interfaces/store';
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from 'store/cart.slice';
import Button from 'components/ui/button';
import {useToast} from 'react-native-toast-notifications';
import {SCREENS} from 'common/constants';

const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  const {items, totalPrice} = useAppSelector(state => state.cart);

  const toast = useToast();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <Text style={styles.price}>$ {totalPrice}</Text>,
    });
  }, [navigation, totalPrice]);

  const handleIncrease = (product: ICartItem) => {
    dispatch(increaseQuantity(product));
  };

  const handleDecrease = (product: ICartItem) => {
    dispatch(decreaseQuantity(product));
  };

  const handleDelete = (product: ICartItem) => {
    Alert.alert('Delete', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(removeFromCart(product));
          toast.show('Item deleted!', {
            type: 'success',
          });
        },
      },
    ]);
  };

  const handleCheckout = () => {
    Alert.alert('Checkout', 'Are you sure you want to checkout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          toast.show('Checkout successful!', {
            type: 'success',
          });
          handleEmptyCart();
          navigation.navigate(SCREENS.HOME);
        },
      },
    ]);
  };

  const handleEmptyCart = () => dispatch(clearCart());

  return (
    <View style={styles.root}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <CartItem
            onDecrease={() => handleDecrease(item)}
            onIncrease={() => handleIncrease(item)}
            onDelete={() => handleDelete(item)}
            product={item}
          />
        )}
        keyExtractor={item => item.id.toString()}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListEmptyComponent={() => <ListEmpty state={false} />}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.row}>
        <Button
          style={styles.button}
          onPress={() => handleEmptyCart()}
          title="Empty Cart"
        />
        <Button
          style={styles.button}
          onPress={() => handleCheckout()}
          title="Checkout"
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.PrimaryBackground,
    padding: 10,
  },
  list: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '49%',
  },
  price: {
    color: Colors.PrimaryAccent,
    fontWeight: 'bold',
    fontSize: FontSizes.ExtraLarge,
  },
});
