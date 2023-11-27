import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../utils/themes/themes';

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
  button: {
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.orange,
    borderRadius: 12,
  },
  buttonTxt: {
    fontSize: RFValue(14),
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
  vetor: {
    alignSelf: 'center',
  },
  footContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: RFValue(16),
    color: 'white',
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
});
