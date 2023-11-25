import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    margin: 4,
    borderWidth: 4,
    borderColor: colors.orange,
    height: 55,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textCard: {
    fontSize: 20,
    fontFamily: fonts.poppins.black,
    fontWeight: 'bold',
    color: 'white',
  },
});
