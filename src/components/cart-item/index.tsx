import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CartItemProps} from 'interfaces/components';
import {Colors, FontSizes} from 'common/styles';
import IconButton from 'components/ui/icon-button';
import {PlusCircle, MinusCircle, Trash2} from 'react-native-feather';

const CartItem: React.FC<CartItemProps> = ({
  product,
  onDecrease,
  onIncrease,
  onDelete,
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
            rippleConfig={{color: Colors.SecondaryAccent}}
            icon={
              <MinusCircle
                height={30}
                width={30}
                color={Colors.SecondaryAccent}
              />
            }
            onPress={() => onDecrease()}
          />
          <Text style={styles.quantity}>{product.quantity}</Text>
          <IconButton
            rippleConfig={{color: Colors.SecondaryAccent}}
            icon={
              <PlusCircle
                height={30}
                width={30}
                color={Colors.SecondaryAccent}
              />
            }
            onPress={() => onIncrease()}
          />
          <IconButton
            icon={<Trash2 height={30} width={30} color={Colors.Danger} />}
            onPress={() => onDelete()}
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
    width: 100,
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
    color: Colors.SecondaryAccent,
  },
  quantity: {
    fontSize: FontSizes.SubHeading,
    fontWeight: 'bold',
    color: Colors.Black,
  },
});
