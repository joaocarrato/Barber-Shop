import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import BarberLogo from '../../../components/atoms/BarberLogo';
import CustomHeader from '../../../components/molecules/CustomHeader';
import UnityList from '../../../components/molecules/UnityList';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { getLocation } from '../../../services/infra/local.services';
import ErrorView from '../../../utils/components/ErrorView';
import LoadingCircle from '../../../utils/components/LoadingCircle';
import { styles } from './styles';

const Unity = () => {
  const { error, isLoading, data } = useQuery({
    queryKey: ['location'],
    queryFn: () => getLocation(),
  });

  const navigation = useNavigation<StackTypes>();

  const handleBack = () => {
    navigation.goBack();
  };

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
        size={40}
        onPress={handleBack}
      />

      <BarberLogo />

      <View style={{ flex: 1 }}>
        <Text style={styles.unityTitle}>Selecione uma unidade</Text>

        <FlatList
          scrollEnabled={false}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <UnityList local={item.local} id={item.id} />
          )}
        />
      </View>
    </View>
  );
};

export default Unity;
