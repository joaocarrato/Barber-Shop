import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = ScaledSheet.create({
  card: {
    alignSelf: 'center',
    margin: '4@s',
    borderWidth: '4@s',
    borderColor: colors.orange,
    height: '55@s',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textCard: {
    fontSize: RFValue(20),
    fontFamily: fonts.poppins.black,
    fontWeight: 'bold',
    color: 'white',
  },
});
