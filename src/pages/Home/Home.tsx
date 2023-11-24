import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import BarbersList from '../../components/template/BarbersList';
import { getBarber } from '../../services/infra/barber.service';
import ErrorView from '../../utils/components/ErrorView';
import LoadingCircle from '../../utils/components/LoadingCircle';

const Home = () => {
  const { error, isLoading, data } = useQuery({
    queryKey: ['barber-list'],
    queryFn: () => getBarber(),
  });

  if (error) {
    return <ErrorView errorName="Falha ao processar informação" />;
  }

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (data?.length === 0) {
    return <ErrorView errorName="Nenhum barbeiro encontrado" />;
  }

  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 12, alignItems: 'center', gap: 20 }}>
        <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Barber Shop 💈</Text>
        <Text style={{ alignSelf: 'flex-start', marginBottom: 12 }}>
          Cheque os nossos barbeiros abaixo e veja a disponibilidade de horário,
          após isso é só marcar.
        </Text>
      </View>

      <BarbersList data={data} />

      <Text
        style={{
          marginLeft: 10,
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Schedule
      </Text>

      <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 12,
            }}>
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            <Text>
              {item.vacation === true ? 'Is on vacation' : 'Is not on vacation'}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
