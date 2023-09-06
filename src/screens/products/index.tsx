import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ProductScreenProps} from 'interfaces/screens';
import {categoryFormatter} from 'helpers/text-formatters';
import {IProduct} from 'interfaces/common';
import {fetchProductsForCategory} from 'api/index';
import ListEmpty from 'components/ui/list-empty';
import ProductBox from 'components/product-box';
import {Colors} from 'common/styles';

const ProductsScreen: React.FC<ProductScreenProps> = ({navigation, route}) => {
  const category = route.params.category;

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: categoryFormatter(category),
    });
  }, [navigation, category]);

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
      } finally {
        setLoading(false);
      }
    })();
  }, [category, trigger]);

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
