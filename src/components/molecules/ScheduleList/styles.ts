import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = (selected?: string, hour?: string) =>
  ScaledSheet.create({
    button: {
      margin: '10@s',
      borderRadius: 16,
      height: '40@s',
      width: '150@s',
      borderWidth: 4,
      borderColor: colors.orange,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: selected === hour ? colors.orange : 'transparent',
    },
    text: {
      fontSize: RFValue(16),
      fontWeight: 'bold',
      color: 'white',
      fontFamily: fonts.poppins.black,
    },
  });
