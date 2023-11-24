import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';

export const styles = StyleSheet.create({
  menuItem: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 18,
    color: 'white',
    fontFamily: fonts.poppins.bold,
    fontWeight: 'bold',
  },
});
