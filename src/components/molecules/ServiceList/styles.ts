import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = (selected?: string, service?: string) =>
  ScaledSheet.create({
    button: {
      paddingHorizontal: '4.5@s',
      flexDirection: 'row',
      alignSelf: 'center',
      margin: '12@s',
      width: '90%',
      borderWidth: '3@s',
      borderColor: colors.orange,
      backgroundColor: selected === service ? colors.orange : colors.background,
      height: '45@s',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
    },
    text: {
      textAlign: 'center',
      fontSize: RFValue(26),
      fontWeight: 'bold',
      fontFamily: fonts.poppins.black,
      color: 'white',
    },
    circle: {
      height: '32@s',
      width: '32@s',
      borderRadius: 100,
      borderWidth: '2@s',
      borderColor: colors.orange,
      backgroundColor: selected == service ? 'white' : 'transparent',
    },
  });
