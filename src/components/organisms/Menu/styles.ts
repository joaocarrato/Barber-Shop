import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/themes/themes';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    backgroundColor: colors.background,
    width: '55%',
    flex: 1,
    paddingTop: 60,
  },
});
