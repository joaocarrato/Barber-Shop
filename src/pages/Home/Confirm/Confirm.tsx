import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import BarberLogo from '../../../components/atoms/BarberLogo';
import ConfirmCard from '../../../components/molecules/ConfirmCard';
import CustomButton from '../../../components/molecules/CustomButton';
import CustomHeader from '../../../components/molecules/CustomHeader';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { globalStyle } from '../../../utils/global/styles.global';
import { styles } from './styles';

interface TypeParams extends RouteProp<ParamListBase> {
  params: {
    local: string;
    service: string;
    name: string;
    schedule: string;
  };
}

type Infos = {
  info: string[];
};

const Confirm = () => {
  const { params } = useRoute<TypeParams>();

  const [informations, setInformations] = useState([
    {
      title: 'Unidade: ',
      info: params.local,
    },
    {
      title: 'Serviço: ',
      info: params.service,
    },
    {
      title: 'Barbeiro: ',
      info: params.name,
    },
    {
      title: 'Horario: ',
      info: params.schedule,
    },
  ]);

  const navigation = useNavigation<StackTypes>();

  return (
    <View style={globalStyle.container}>
      <CustomHeader iconName="chevron-back-outline" />
      <BarberLogo />
      <Text style={[globalStyle.title, { marginBottom: 0 }]}>
        O seu agendamento:
      </Text>
      <Text style={styles.subTitle}>Confira todos seus dados:</Text>

      <View>
        <FlatList
          scrollEnabled={false}
          data={informations}
          renderItem={({ item }) => (
            <ConfirmCard title={item.title} info={item.info} />
          )}
        />
      </View>

      <CustomButton
        text="Confirmar"
        buttonStyle={styles.bigButton}
        textStyle={styles.buttonTxt}
        onPress={() => navigation.navigate('Appointment')}
      />
    </View>
  );
};

export default Confirm;
