import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ProductScreenProps} from 'interfaces/screens';
import {categoryFormatter} from 'helpers/text-formatters';
import {IProduct} from 'interfaces/common';
import {fetchProductsForCategory} from 'api/index';
import ListEmpty from 'components/ui/list-empty';
import ProductBox from 'components/product-box';
import {Colors} from 'common/styles';
import {useToast} from 'react-native-toast-notifications';
import IconButton from 'components/ui/icon-button';
import {ShoppingCart} from 'react-native-feather';
import {SCREENS} from 'common/constants';
import {useAppSelector} from 'store/redux';

const ProductsScreen: React.FC<ProductScreenProps> = ({navigation, route}) => {
  const category = route.params.category;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);

  const {totalProducts} = useAppSelector(state => state.cart);
  const toast = useToast();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: categoryFormatter(category),
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <IconButton
          counter={totalProducts}
          rippleConfig={{color: Colors.NeutralBackground}}
          icon={<ShoppingCart color={Colors.PrimaryText} />}
          onPress={() => navigation.navigate(SCREENS.CART)}
        />
      ),
    });
  }, [navigation, category, totalProducts]);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetchProductsForCategory({category});
        if (response.status === 200) {
          const products = response.data.products;
          setProducts(products);
        }
      } catch (error) {
        console.log(error);
        toast.show('Something went wrong', {
          type: 'danger',
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [category, toast, trigger]);

  return (
    <View style={styles.root}>
      <FlatList
        refreshing={loading}
        onRefresh={() => setTrigger(t => !t)}
        data={products}
        renderItem={({item}) => <ProductBox product={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<ListEmpty state={loading} />}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.PrimaryBackground,
    padding: 10,
  },
  list: {},
});
