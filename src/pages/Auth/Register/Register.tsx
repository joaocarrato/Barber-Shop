import auth from '@react-native-firebase/auth';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { height } = useWindowDimensions();

  const navigation = useNavigation<StackTypes>();

  const handleBack = () => {
    return navigation.goBack();
  };

  const register = async () => {
    if (password.trim() === confirmPassword.trim()) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          console.log('user: ', userCredential);
          setTimeout(() => {
            navigation.goBack();
          }, 200);
        })
        .catch(error => {
          if (error.code === 'auth/weak-password') {
            return setError('a senha é muito fraca');
          }
          if (error.code === 'auth/invalid-email') {
            return setError('O endereço de e-mail não é válido.');
          }
          if (error.code === 'auth/email-already-in-use') {
            return setError(
              'Já existe uma conta com o endereço de email fornecido.',
            );
          }
        });
    }
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

        <TextField
          value={email}
          onChangeText={item => setEmail(item)}
          placeHolderText="Email"
          obscure={false}
        />

        <TextField
          value={password}
          onChangeText={item => setPassword(item)}
          placeHolderText="Digite sua senha"
          obscure={true}
        />
        <TextField
          value={confirmPassword}
          onChangeText={item => setConfirmPassword(item)}
          placeHolderText="Confirme sua senha"
          obscure={true}
        />
        {/* BOTAO */}

        <Text style={styles.error}>{error}</Text>

        <CustomButton
          text="Registrar"
          textStyle={styles.buttonTxt}
          buttonStyle={styles.bigButton}
          onPress={register}
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
