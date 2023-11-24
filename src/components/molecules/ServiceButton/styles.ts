import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = (selected?: string) =>
  StyleSheet.create({
    button: {
      marginTop: 20,
      height: 50,
      width: 200,
      backgroundColor: selected === '' ? colors.orangeDisable : colors.orange,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 12,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: fonts.poppins.black,
      color: 'white',
    },
  });
