import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = (selected?: string, service?: string) =>
  StyleSheet.create({
    button: {
      paddingHorizontal: 4.5,
      flexDirection: 'row',
      alignSelf: 'center',
      margin: 12,
      width: '90%',
      borderWidth: 3,
      borderColor: colors.orange,
      backgroundColor: selected === service ? colors.orange : colors.background,
      height: 45,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
    },
    text: {
      textAlign: 'center',
      fontSize: 26,
      fontWeight: 'bold',
      fontFamily: fonts.poppins.black,
      color: 'white',
    },
    circle: {
      height: 32,
      width: 32,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: colors.orange,
      backgroundColor: selected == service ? 'white' : 'transparent',
    },
  });
