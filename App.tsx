import AppNavigation from 'navigation/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'store/redux';

function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastProvider duration={1000}>
            <AppNavigation />
          </ToastProvider>
        </PersistGate>
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
