import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import BarberLogo from '../../components/atoms/BarberLogo';
import InstaLogo from '../../components/atoms/InstaLogo';
import { StackTypes } from '../../routes/Stack/StackNav';
import Divider from '../../utils/components/Divider';
import { Background } from '../../utils/global/icons';
import { styles } from './styles';

const AuthPage = () => {
  const navigation = useNavigation<StackTypes>();

  const { height } = useWindowDimensions();

  const handleNavigation = () => {
    return navigation.navigate('Login');
  };

  return (
    <ScrollView
      style={styles.container}
      scrollEnabled={height < 700 ? true : false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonTxt}>Entrar</Text>
        </TouchableOpacity>
        <InstaLogo />
      </View>

      <BarberLogo />

      <Image source={Background} style={styles.vetor} />

      <Divider marginBot={10} />

      <View style={styles.footContainer}>
        <Text style={styles.descriptionText}>
          Um novo conceito em barbearia
        </Text>
        <TouchableOpacity style={styles.bigButton} onPress={handleNavigation}>
          <Text style={styles.buttonTxt}>Agendar horário</Text>
        </TouchableOpacity>
        <Text style={styles.copyText}>
          Todos os direitos reservados ® Thbarberclub
        </Text>
      </View>
    </ScrollView>
  );
};

export default AuthPage;
