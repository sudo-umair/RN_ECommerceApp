import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {HomeScreenProps} from 'interfaces/screens';
import {ICategories} from 'interfaces/common';
import {fetchCategories} from 'api/index';
import CategoryRow from 'components/category-row';
import {Colors} from 'common/styles';
import ListEmpty from 'components/ui/list-empty';
import {useToast} from 'react-native-toast-notifications';
import IconButton from 'components/ui/icon-button';
import {ShoppingCart} from 'react-native-feather';
import {SCREENS} from 'common/constants';
import {useAppSelector} from 'store/redux';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategories>([]);
  const [trigger, setTrigger] = useState<boolean>(false);

  const {totalProducts} = useAppSelector(state => state.cart);

  const toast = useToast();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Categories',
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <IconButton
          counter={totalProducts}
          rippleConfig={{color: Colors.SecondaryAccent}}
          icon={<ShoppingCart color={Colors.PrimaryText} />}
          onPress={() => navigation.navigate(SCREENS.CART)}
        />
      ),
    });
  }, [navigation, totalProducts]);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetchCategories();
        setCategories(response.data);
      } catch (error) {
        console.log(error);
        toast.show('Something went wrong', {
          type: 'danger',
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [toast, trigger]);

  return (
    <View style={styles.root}>
      <FlatList
        refreshing={loading}
        onRefresh={() => setTrigger(t => !t)}
        data={categories}
        renderItem={({item}) => <CategoryRow title={item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<ListEmpty state={loading} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.PrimaryBackground,
    padding: 10,
  },
  list: {
    gap: 10,
  },
});
