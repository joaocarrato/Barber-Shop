import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import BarberLogo from '../../components/atoms/BarberLogo';
import CustomHeader from '../../components/molecules/CustomHeader';
import Divider from '../../utils/components/Divider';
import { Background } from '../../utils/global/icons';
import { styles } from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <CustomHeader iconName="person-circle-outline" size={50} />

      <BarberLogo />

      <Image source={Background} style={styles.vetor} />

      <Divider marginBot={10} />

      <View style={styles.footContainer}>
        <Text style={styles.descriptionText}>
          Seja bem vindo, marque seu horário e aumente ainda mais sua
          auto-estima
        </Text>
        <TouchableOpacity style={styles.bigButton}>
          <Text style={styles.buttonTxt}>Agendar horário</Text>
        </TouchableOpacity>
        <Text style={styles.copyText}>
          Todos os direitos reservados ® Thbarberclub
        </Text>
      </View>
    </View>
  );
};

export default Home;
