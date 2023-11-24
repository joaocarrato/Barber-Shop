import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Logo } from '../../../utils/global/icons';

const BarberLogo = () => {
  return <Image source={Logo} style={styles.logo} />;
};

const styles = StyleSheet.create({
  logo: {
    height: 120,
    alignSelf: 'center',
  },
});

export default BarberLogo;
