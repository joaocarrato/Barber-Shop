import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = ScaledSheet.create({
  image: {
    flex: 1,
    height: '160@s',
    width: '160@s',
    borderWidth: 3,
    borderColor: colors.orange,
    borderRadius: 14,
  },
  name: {
    alignSelf: 'center',
    fontSize: RFValue(14),
    fontWeight: '600',
    color: 'white',
    fontFamily: fonts.poppins.bold,
  },
});
