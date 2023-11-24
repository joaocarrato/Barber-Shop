import { StyleSheet } from 'react-native';

export const styles = (props?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'red',
    },
    tabIconView: {
      alignItems: 'center',
      justifyContent: 'center',
      top: 12,
      backgroundColor: props ? 'white' : 'transparent',
      borderRadius: 99,
      height: 50,
      width: 50,
      marginTop: 8,
    },
    center: {
      alignItems: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 14,
    },
  });
