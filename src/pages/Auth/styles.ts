import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utils/themes/themes';

export const styles = ScaledSheet.create({
  container: {
    paddingTop: '60@s',
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: '20@s',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: '40@s',
    width: '80@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '1.5@s',
    borderColor: colors.orange,
    borderRadius: 12,
  },
  buttonTxt: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: 'white',
  },
  insta: {
    height: '40@s',
    width: '40@s',
  },
  logo: {
    height: '120@s',
    alignSelf: 'center',
  },
  vetor: {
    alignSelf: 'center',
  },
  footContainer: {
    marginTop: '10@s',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: RFValue(16),
    color: 'white',
  },
  bigButton: {
    height: '60@s',
    width: '250@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: 26,
    top: '10@s',
    marginBottom: '12@s',
  },
  copyText: {
    color: 'grey',
    top: '12@s',
    fontSize: RFValue(12),
  },
});
