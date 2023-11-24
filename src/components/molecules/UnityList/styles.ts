import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = StyleSheet.create({
  card: {
    borderWidth: 3,
    borderColor: colors.orange,
    borderRadius: 40,
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 8,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: fonts.poppins.black,
    fontWeight: 'bold',
  },
});
