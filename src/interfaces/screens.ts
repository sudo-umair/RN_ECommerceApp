import {SCREENS} from 'common/constants';
import type {RootStackParamList} from './navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  SCREENS.HOME
>;
