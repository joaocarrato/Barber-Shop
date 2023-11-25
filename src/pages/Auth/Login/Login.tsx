import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BarberLogo from '../../../components/atoms/BarberLogo';
import CustomButton from '../../../components/molecules/CustomButton';
import CustomHeader from '../../../components/molecules/CustomHeader';
import TextField from '../../../components/molecules/TextField';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { styles } from './styles';

const Login = () => {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  const navigation = useNavigation<StackTypes>();

  const handleBack = () => {
    return navigation.goBack();
  };

  const handleLogin = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('userTryToLogin: ', userCredential);
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          return setError('Senha incorreta.');
        }
        if (error.code === 'auth/invalid-email') {
          return setError('O endereço de e-mail não é válido.');
        }
      });
  };

  const handleScroll: boolean = height < 700 ? true : false;

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={1}
      extraHeight={77}
      style={styles.container}
      scrollEnabled={handleScroll}>
      <CustomHeader iconName="chevron-back-outline" onPress={handleBack} />

      <BarberLogo />

      <Text style={styles.title}>Entre agora</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.subTitle}>Ou faça o </Text>
        <Text style={styles.subTitleOrange}>cadastro </Text>
        <Text style={styles.subTitle}>agora</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 120, gap: 15 }}>
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

        <CustomButton
          text="Esqueceu sua senha?"
          textStyle={styles.subTitle}
          buttonStyle={{ alignSelf: 'flex-end', marginRight: 24 }}
        />

        <Text style={styles.error}>{error}</Text>

        {/* BOTAO */}

        <CustomButton
          text="Entrar"
          textStyle={styles.buttonTxt}
          buttonStyle={styles.bigButton}
          onPress={handleLogin}
        />

        {/* TEXTO CLICAVEL */}
        <CustomButton
          text="Registrar"
          textStyle={styles.subTitle}
          onPress={() => navigation.navigate('Register')}
        />
      </View>

      <Text style={styles.copyText}>
        Todos os direitos reservados ® Thbarberclub
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default Login;
