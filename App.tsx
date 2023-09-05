/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppNavigation from 'navigation/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
