import { useNavigation } from '@react-navigation/native';
import React from 'react';
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

  const navigation = useNavigation<StackTypes>();

  const handleBack = () => {
    return navigation.goBack();
  };

  const handleScroll: boolean = height < 700 ? true : false;

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={1}
      extraHeight={77}
      style={styles.container}
      scrollEnabled={handleScroll}>
      <CustomHeader
        iconName="chevron-back-outline"
        size={32}
        onPress={handleBack}
      />

      <BarberLogo />

      <Text style={styles.title}>Entre agora</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.subTitle}>Ou faça o </Text>
        <Text style={styles.subTitleOrange}>cadastro </Text>
        <Text style={styles.subTitle}>agora</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 120, gap: 15 }}>
        <TextField placeHolderText="Email" obscure={false} />

        <TextField placeHolderText="Digite sua senha" obscure={true} />

        <CustomButton
          text="Esqueceu sua senha?"
          textStyle={styles.subTitle}
          buttonStyle={{ alignSelf: 'flex-end', marginRight: 24 }}
        />

        {/* BOTAO */}

        <CustomButton
          text="Entrar"
          textStyle={styles.buttonTxt}
          buttonStyle={styles.bigButton}
          onPress={() => navigation.navigate('Home')}
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