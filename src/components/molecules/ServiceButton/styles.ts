import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = (selected?: string) =>
  ScaledSheet.create({
    button: {
      marginTop: '20@s',
      height: '50@s',
      width: '200@s',
      backgroundColor: selected === '' ? colors.orangeDisable : colors.orange,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 12,
    },
    text: {
      fontSize: RFValue(18),
      fontWeight: 'bold',
      fontFamily: fonts.poppins.black,
      color: 'white',
    },
  });
