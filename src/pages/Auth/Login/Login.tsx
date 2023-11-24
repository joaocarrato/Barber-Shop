import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { Insta, Logo } from '../../../utils/global/icons';
import { colors } from '../../../utils/themes/themes';
import { styles } from './styles';

const Login = () => {
  const navigation = useNavigation<StackTypes>();

  const handleBack = () => {
    return navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons
            name="chevron-back-outline"
            size={32}
            color={colors.orange}
          />
        </TouchableOpacity>
        <Image source={Insta} style={styles.insta} />
      </View>

      <Image source={Logo} style={styles.logo} />

      <Text style={styles.title}>Entre agora</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.subTitle}>Ou faça o </Text>
        <Text style={styles.subTitleOrange}>cadastro </Text>
        <Text style={styles.subTitle}>agora</Text>
      </View>

      <View style={{ alignItems: 'center', top: 120, gap: 15 }}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor={'grey'}
          style={styles.input}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Digite sua senha"
          placeholderTextColor={'grey'}
          style={styles.input}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
