import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  selected: string;
  onPress: () => void;
};

const ServiceButton = ({ selected, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={selected === '' ? true : false}
      style={styles(selected).button}>
      <Text style={styles().text}>Continuar</Text>
    </TouchableOpacity>
  );
};

export default ServiceButton;
