import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {FontSizes} from 'common/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ListEmpty: React.FC<{
  state: boolean;
}> = ({state}) => (
  <Text style={styles.info}>{state ? 'Loading...' : 'No data found'}</Text>
);

export default ListEmpty;

const styles = StyleSheet.create({
  info: {
    fontSize: FontSizes.Large,
    color: Colors.PrimaryText,
    textAlign: 'center',
    marginTop: 80,
  },
});
