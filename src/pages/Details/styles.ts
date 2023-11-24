import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: '90%',
    alignSelf: 'center',
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  ratingValue: {
    fontSize: 20,
    color: 'orange',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    height: 60,
    width: 120,
    justifyContent: 'center',
    borderRadius: 16,
    top: 160,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
