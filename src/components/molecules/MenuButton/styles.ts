import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts } from '../../../utils/themes/fonts';

export const styles = ScaledSheet.create({
  menuItem: {
    paddingHorizontal: '10@s',
    flexDirection: 'row',
    gap: '30@s',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: RFValue(16),
    color: 'white',
    fontFamily: fonts.poppins.bold,
    fontWeight: 'bold',
  },
});
