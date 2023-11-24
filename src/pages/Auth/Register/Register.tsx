import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../../components/molecules/CustomButton';
import CustomHeader from '../../../components/molecules/CustomHeader';
import TextField from '../../../components/molecules/TextField';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { Logo } from '../../../utils/global/icons';
import { styles } from './styles';

const Register = () => {
  const [error, setError] = useState<string>('');

  const { height } = useWindowDimensions();

  const navigation = useNavigation<StackTypes>();

  const handleBack = () => {
    return navigation.goBack();
  };

  const handleScroll: boolean = height < 700 ? true : false;

  return (
    <KeyboardAwareScrollView
      extraHeight={75}
      extraScrollHeight={0.1}
      style={styles.container}
      scrollEnabled={handleScroll}>
      <CustomHeader
        iconName="chevron-back-outline"
        size={32}
        onPress={handleBack}
      />

      <Image source={Logo} style={styles.logo} />

      <Text style={styles.title}>Cadastre-se agora</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.subTitle}>Ou faça o </Text>
        <Text style={styles.subTitleOrange}>login </Text>
        <Text style={styles.subTitle}>agora</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 25, gap: 15 }}>
        <TextField placeHolderText="Nome completo" obscure={false} />

        <TextField placeHolderText="Email" obscure={false} />

        <TextField placeHolderText="Digite sua senha" obscure={true} />
        <TextField placeHolderText="Confirme sua senha" obscure={true} />
        {/* BOTAO */}

        <Text>{error}</Text>

        <CustomButton
          text="Registrar"
          textStyle={styles.buttonTxt}
          buttonStyle={styles.bigButton}
          onPress={() => {}}
        />

        {/* TEXTO CLICAVEL */}
        <CustomButton
          text="Já é membro? Logue-se"
          textStyle={styles.subTitle}
          onPress={() => navigation.navigate('Login')}
        />
      </View>

      <Text style={styles.copyText}>
        Todos os direitos reservados ® Thbarberclub
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default Register;
