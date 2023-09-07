import AppNavigation from 'navigation/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {store} from 'store/redux';

function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <Provider store={store}>
        <ToastProvider>
          <AppNavigation />
        </ToastProvider>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
