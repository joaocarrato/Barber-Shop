import { RFValue } from 'react-native-responsive-fontsize';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utils/themes/themes';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 120,
    alignSelf: 'center',
  },
  vetor: {
    alignSelf: 'center',
  },
  footContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: RFValue(14),
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  bigButton: {
    height: 60,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: 26,
    top: 10,
    marginBottom: 12,
  },
  copyText: {
    color: 'grey',
    top: 12,
    fontSize: RFValue(12),
  },
  buttonTxt: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: 'white',
  },
});
