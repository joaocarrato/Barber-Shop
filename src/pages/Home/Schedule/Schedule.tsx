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
import CustomHeader from '../../../components/molecules/CustomHeader';
import ScheduleList from '../../../components/molecules/ScheduleList';
import ServiceButton from '../../../components/molecules/ServiceButton';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { getSchedule } from '../../../services/infra/schedule.service';
import ErrorView from '../../../utils/components/ErrorView';
import LoadingCircle from '../../../utils/components/LoadingCircle';
import { globalStyle } from '../../../utils/global/styles.global';

interface TypeParams extends RouteProp<ParamListBase> {
  params: {
    local: string;
    service: string;
    name: string;
  };
}

const Schedule = () => {
  const [schedule, setSchedule] = useState('');

  const { params } = useRoute<TypeParams>();
  const name = params.name;
  const service = params.service;
  const local = params.local;

  const navigation = useNavigation<StackTypes>();

  const { error, isLoading, data } = useQuery({
    queryKey: ['schedule'],
    queryFn: () => getSchedule(),
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
    <View style={globalStyle.container}>
      <CustomHeader
        iconName={'chevron-back-outline'}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <BarberLogo />

      <Text style={globalStyle.title}>Selecione um horário</Text>

      <View style={{ alignItems: 'center' }}>
        <FlatList
          scrollEnabled={false}
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <ScheduleList
              hour={item.hour}
              selected={schedule}
              onPress={() => setSchedule(item.hour)}
            />
          )}
        />

        <ServiceButton
          selected={schedule}
          onPress={() =>
            navigation.navigate('Confirm', { local, service, schedule, name })
          }
        />
      </View>
    </View>
  );
};

export default Schedule;
