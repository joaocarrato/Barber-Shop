import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts } from '../../../utils/themes/fonts';
import { colors } from '../../../utils/themes/themes';

export const styles = StyleSheet.create({
  subTitle: {
    fontSize: RFValue(14),
    fontWeight: '200',
    fontFamily: fonts.poppins.thin,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 40,
  },
  buttonTxt: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    fontFamily: fonts.poppins.black,
    color: 'white',
  },
  bigButton: {
    alignSelf: 'center',
    marginTop: 80,
    height: 60,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: 14,
  },
});
