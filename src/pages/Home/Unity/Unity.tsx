import React from 'react';
import { Text, View } from 'react-native';
import BarberLogo from '../../../components/atoms/BarberLogo';
import CustomHeader from '../../../components/molecules/CustomHeader';
import { styles } from './styles';

const Unity = () => {
  return (
    <View style={styles.container}>
      <CustomHeader iconName="chevron-back-outline" size={40} />

      <BarberLogo />

      <View style={{ alignItems: 'center' }}>
        <Text style={styles.unityTitle}>Selecione uma unidade</Text>
      </View>
    </View>
  );
};

export default Unity;
