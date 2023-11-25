import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 160,
    width: 160,
    borderWidth: 3,
    borderColor: colors.orange,
    borderRadius: 14,
  },
  name: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    fontFamily: fonts.poppins.bold,
  },
});
