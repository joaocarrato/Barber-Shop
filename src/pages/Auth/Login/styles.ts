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
    fontSize: 18,
    fontWeight: 'bold',
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
  input: {
    borderWidth: 3.5,
    borderColor: colors.orange,
    borderRadius: 24,
    height: 60,
    paddingHorizontal: 12,
    width: '90%',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.poppins.bold,
    color: 'white',
  },
});
