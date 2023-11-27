import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = ScaledSheet.create({
  subTitle: {
    fontSize: RFValue(14),
    fontWeight: '200',
    fontFamily: fonts.poppins.thin,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '197@s',
    height: '55@s',
    borderRadius: 12,
    borderColor: colors.orange,
    borderWidth: '4@s',
  },
  text: {
    fontSize: RFValue(16),
    fontFamily: fonts.poppins.bold,
    fontWeight: 'bold',
    color: colors.orange,
  },
});
