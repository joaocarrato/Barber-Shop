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
import { getBarberID } from '../../services/infra/barber.service';
import ErrorView from '../../utils/components/ErrorView';
import LoadingCircle from '../../utils/components/LoadingCircle';
import ViewTextDesc from '../../utils/components/ViewTextDesc';
import { styles } from './styles';

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
    <SafeAreaView style={styles.safeArea}>
      <Image source={{ uri: data.avatar }} style={styles.image} />

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

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTitle}>Rating</Text>
        <Text style={styles.ratingValue}>⭐{data.rating}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Set schedule</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Details;
