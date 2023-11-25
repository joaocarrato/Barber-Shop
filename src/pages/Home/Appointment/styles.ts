import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = StyleSheet.create({
  subTitle: {
    fontSize: 14,
    fontWeight: '200',
    fontFamily: fonts.poppins.thin,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 197,
    height: 55,
    borderRadius: 12,
    borderColor: colors.orange,
    borderWidth: 4,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.poppins.bold,
    fontWeight: 'bold',
    color: colors.orange,
  },
});
