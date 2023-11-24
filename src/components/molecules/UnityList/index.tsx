import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { styles } from './styles';

type Props = {
  id: number;
  local: string;
};

const UnityList = ({ id, local }: Props) => {
  const navigation = useNavigation<StackTypes>();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Service', { local })}>
      <Text style={styles.title}>{local}</Text>
    </TouchableOpacity>
  );
};

export default UnityList;
