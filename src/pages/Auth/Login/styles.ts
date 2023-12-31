import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: fonts.poppins.black,
    color: 'white',
  },
  insta: {
    height: 40,
    width: 40,
  },
  logo: {
    height: 120,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: fonts.poppins.bold,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: fonts.poppins.bold,
  },
  subTitleOrange: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.orange,
    fontFamily: fonts.poppins.bold,
  },
  bigButton: {
    marginTop: 20,
    height: 60,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: 14,
  },
  copyText: {
    alignSelf: 'center',
    color: 'grey',
    top: 12,
    fontSize: 12,
  },
  error: {
    fontSize: 14,
    color: 'red',
  },
});
