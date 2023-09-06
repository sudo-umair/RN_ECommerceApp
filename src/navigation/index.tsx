import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'interfaces/navigation';
import {SCREENS} from 'common/constants';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import HomeScreen from 'screens/home';
import ProductsScreen from 'screens/products';
import DescriptionScreen from 'screens/description';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.PRODUCTS} component={ProductsScreen} />
        <Stack.Screen
          name={SCREENS.DESCRIPTION}
          component={DescriptionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
