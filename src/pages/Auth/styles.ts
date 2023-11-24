import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'grey',
    width: '90%',
    height: 50,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
