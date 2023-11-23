import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackTypes } from '../routes/StackNav';

const AuthPage = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="GO" onPress={() => navigation.navigate('TabNav')} />
    </SafeAreaView>
  );
};

export default AuthPage;
