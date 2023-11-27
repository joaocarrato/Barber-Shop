import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts } from '../themes/fonts';
import { colors } from '../themes/themes';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: RFValue(26),
    fontWeight: 'bold',
    color: 'white',
    fontFamily: fonts.poppins.black,
    alignSelf: 'center',
    marginBottom: 60,
    textAlign: 'center',
  },
});
