import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BarberLogo from '../../../components/atoms/BarberLogo';
import CustomHeader from '../../../components/molecules/CustomHeader';
import ServiceButton from '../../../components/molecules/ServiceButton';
import ServiceList from '../../../components/molecules/ServiceList';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { getOptions } from '../../../services/infra/options.service';
import ErrorView from '../../../utils/components/ErrorView';
import LoadingCircle from '../../../utils/components/LoadingCircle';
import { styles } from './styles';

interface TypeParams extends RouteProp<ParamListBase> {
  params: {
    local: string;
  };
}

const ChooseService = () => {
  const [service, setSelected] = useState('');

  const local = useRoute<TypeParams>().params.local;

  const navigation = useNavigation<StackTypes>();

  const { error, isLoading, data } = useQuery({
    queryKey: ['services'],
    queryFn: () => getOptions(),
  });

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
    <View style={styles.container}>
      <CustomHeader
        iconName="chevron-back-outline"
        onPress={() => navigation.goBack()}
      />

      <BarberLogo />

      <Text style={styles.title}>Selecione um serviço</Text>

      <View style={{ marginBottom: 15 }}>
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({ item }) => (
            <ServiceList
              selected={service}
              service={item.service}
              setSelected={() => setSelected(item.service)}
            />
          )}
        />

        <ServiceButton
          selected={service}
          onPress={() => navigation.navigate('Barber', { local, service })}
        />
      </View>
    </View>
  );
};

export default ChooseService;
