import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = (selected?: string, hour?: string) =>
  StyleSheet.create({
    button: {
      margin: 10,
      borderRadius: 16,
      height: 40,
      width: 160,
      borderWidth: 4,
      borderColor: colors.orange,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: selected === hour ? colors.orange : 'transparent',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: fonts.poppins.black,
    },
  });
