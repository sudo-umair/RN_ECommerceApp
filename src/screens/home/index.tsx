import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HomeScreenProps} from 'interfaces/screens';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  return (
    <View style={styles.root}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
