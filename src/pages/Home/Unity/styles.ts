import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: colors.background,
  },
  unityTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: fonts.poppins.black,
  },
});
