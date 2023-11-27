import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = ScaledSheet.create({
  card: {
    borderWidth: '3@s',
    borderColor: colors.orange,
    borderRadius: 40,
    width: '80%',
    height: '60@s',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '8@s',
  },
  title: {
    fontSize: RFValue(24),
    color: 'white',
    fontFamily: fonts.poppins.black,
    fontWeight: 'bold',
  },
});
