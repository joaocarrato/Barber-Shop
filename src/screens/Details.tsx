import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getBarberID } from '../services/barber.service';
import ErrorView from '../utils/ErrorView';
import LoadingCircle from '../utils/LoadingCircle';
import ViewTextDesc from '../utils/ViewTextDesc';

interface TypeParams extends RouteProp<ParamListBase> {
  params: {
    id: string;
  };
}

const Details = () => {
  const { params } = useRoute<TypeParams>();

  const { error, isLoading, data } = useQuery({
    queryKey: ['barber-id'],
    queryFn: () => getBarberID(params.id),
  });

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
    <SafeAreaView style={{ flex: 1, alignItems: 'center', gap: 20 }}>
      <Image
        source={{ uri: data.avatar }}
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 220,
          borderRadius: 12,
          marginBottom: 16,
        }}
      />

      <ViewTextDesc
        title="Name"
        subTitle={data.name}
        subSection={data.lastName}
      />

      <ViewTextDesc title="Description" subTitle={data.description} />

      <ViewTextDesc
        title="Vacation"
        subTitle={
          data.vacation === true ? 'Is on vacation' : 'Is not on vacation'
        }
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{ fontSize: 22, fontWeight: 'bold', marginHorizontal: 16 }}>
          Rating
        </Text>
        <Text style={{ fontSize: 20, color: 'orange' }}>⭐{data.rating}</Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          height: 60,
          width: 120,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
          top: 160,
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Set schedule</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Details;
