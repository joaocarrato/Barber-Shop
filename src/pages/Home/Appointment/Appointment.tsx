import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import BarberLogo from '../../../components/atoms/BarberLogo';
import CustomButton from '../../../components/molecules/CustomButton';
import CustomHeader from '../../../components/molecules/CustomHeader';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { Verificated } from '../../../utils/global/icons';
import { globalStyle } from '../../../utils/global/styles.global';
import { styles } from './styles';

const Appointment = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={globalStyle.container}>
      <CustomHeader iconName="" />
      <BarberLogo />
      <Text style={[globalStyle.title, { marginBottom: 0 }]}>
        HORÁRIO AGENDADO!
      </Text>
      <Text style={styles.subTitle}>Nós temos 15 min de tolerância.</Text>

      <Image source={Verificated} />

      <CustomButton
        text="Voltar ao inicio"
        buttonStyle={styles.button}
        textStyle={styles.text}
        onPress={() => navigation.navigate('AuthPage')}
      />
    </View>
  );
};

export default Appointment;
