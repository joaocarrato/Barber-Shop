import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../utils/themes/themes';

export const styles = ScaledSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    backgroundColor: colors.background,
    width: '55%',
    flex: 1,
    paddingTop: '60@s',
  },
});
