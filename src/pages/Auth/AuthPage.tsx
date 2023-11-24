import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, SafeAreaView, Text, TextInput } from 'react-native';
import { StackTypes } from '../../routes/StackNav';
import { getUser } from '../../services/infra/user.service';
import ErrorView from '../../utils/components/ErrorView';
import LoadingCircle from '../../utils/components/LoadingCircle';
import { styles } from './styles';

const AuthPage = () => {
  const { error, isLoading, data } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUser(),
  });

  const navigation = useNavigation<StackTypes>();

  if (error) {
    return <ErrorView errorName="Falha ao processar informação" />;
  }

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (!data) {
    return <ErrorView errorName="Nenhum barbeiro encontrado" />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput placeholder="username" style={styles.input} />
      <TextInput placeholder="email" style={styles.input} />
      <TextInput placeholder="senha" style={styles.input} />

      {/* <FlatList data={data} renderItem={({ item }) => <Text>{}</Text>} /> */}

      <Button title="Go" onPress={() => navigation.navigate('TabNav')} />
    </SafeAreaView>
  );
};

export default AuthPage;
