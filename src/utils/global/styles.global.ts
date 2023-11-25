import { StyleSheet } from 'react-native';
import { fonts } from '../themes/fonts';
import { colors } from '../themes/themes';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: fonts.poppins.black,
    alignSelf: 'center',
    marginBottom: 60,
  },
});
