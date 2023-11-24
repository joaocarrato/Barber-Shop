import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import BarberLogo from '../../../components/atoms/BarberLogo';
import CustomHeader from '../../../components/molecules/CustomHeader';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { styles } from '../../../utils/global/styles.global';

interface TypeParams extends RouteProp<ParamListBase> {
  params: {
    local: string;
    selected: string;
  };
}

const ChooseBarber = () => {
  const local = useRoute<TypeParams>().params.local;
  const service = useRoute<TypeParams>().params.selected;

  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.container}>
      <CustomHeader
        iconName="chevron-back-outline"
        size={35}
        onPress={() => navigation.goBack()}
      />

      <BarberLogo />

      <Text style={styles.title}>Selecione o profissional</Text>
    </View>
  );
};

export default ChooseBarber;
