import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {DescriptionScreenProps} from 'interfaces/screens';
import {capitalize, ratingFormatter} from 'helpers/text-formatters';
import {Colors, FontSizes} from 'common/styles';
import Button from 'components/ui/button';

const DescriptionScreen: React.FC<DescriptionScreenProps> = ({
  navigation,
  route,
}) => {
  const product = route.params.product;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: capitalize(product.title),
    });
  }, [navigation, product]);

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
      <View style={styles.buttonRow}>
        <Button title="Add to Cart" onPress={() => {}} />
      </View>
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
  buttonRow: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
});
