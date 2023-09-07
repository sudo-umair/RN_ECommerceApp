import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CartItemProps} from 'interfaces/components';
import {Colors, FontSizes} from 'common/styles';
import IconButton from 'components/ui/icon-button';
import {PlusCircle, MinusCircle} from 'react-native-feather';

const CartItem: React.FC<CartItemProps> = ({
  product,
  onDecrease,
  onIncrease,
}) => {
  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.thumbnail}
        resizeMode="cover"
        source={{uri: product.thumbnail}}
      />
      <View style={styles.container2}>
        <View style={styles.details}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
        <View style={styles.details}>
          <IconButton
            icon={<MinusCircle height={30} width={30} color={Colors.Error} />}
            onPress={() => onDecrease()}
            style={styles.iconButton}
          />
          <Text style={styles.quantity}>{product.quantity}</Text>
          <IconButton
            icon={<PlusCircle height={30} width={30} color={Colors.Error} />}
            onPress={() => onIncrease()}
            style={styles.iconButton}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.NeutralBackground,
    elevation: 5,
    padding: 10,
    shadowColor: Colors.Black,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  container2: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  thumbnail: {
    height: '100%',
    width: '25%',
  },
  details: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSizes.Large,
    fontWeight: 'bold',
    color: Colors.Black,
    width: '80%',
  },
  price: {
    fontSize: FontSizes.Medium,
    fontWeight: 'bold',
    color: Colors.Error,
  },
  iconButton: {},
  quantity: {
    fontSize: FontSizes.ExtraLarge,
    fontWeight: 'bold',
    color: Colors.PrimaryAccent,
  },
});
