import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import BarberLogo from '../../../components/atoms/BarberLogo';
import BarberCard from '../../../components/molecules/BarberCard';
import CustomHeader from '../../../components/molecules/CustomHeader';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { getBarber } from '../../../services/infra/barber.service';
import ErrorView from '../../../utils/components/ErrorView';
import LoadingCircle from '../../../utils/components/LoadingCircle';
import { globalStyle } from '../../../utils/global/styles.global';

interface TypeParams extends RouteProp<ParamListBase> {
  params: {
    local: string;
    service: string;
  };
}

const ChooseBarber = () => {
  const [name, setName] = useState('');

  const { error, isLoading, data } = useQuery({
    queryKey: ['barbers'],
    queryFn: () => getBarber(),
  });

  const local = useRoute<TypeParams>().params.local;
  const service = useRoute<TypeParams>().params.service;

  const navigation = useNavigation<StackTypes>();

  if (error) {
    return <ErrorView errorName="Falha ao processar informação" />;
  }

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (data?.length === 0) {
    return <ErrorView errorName="Nenhuma localização encontrada" />;
  }

  return (
    <View style={globalStyle.container}>
      <CustomHeader
        iconName="chevron-back-outline"
        onPress={() => navigation.goBack()}
      />

      <BarberLogo />

      <Text style={globalStyle.title}>Selecione o profissional</Text>

      <View style={{ alignSelf: 'center' }}>
        <FlatList
          scrollEnabled={false}
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <BarberCard
              name={item.name}
              local={local}
              service={service}
              avatar={item.avatar}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ChooseBarber;
