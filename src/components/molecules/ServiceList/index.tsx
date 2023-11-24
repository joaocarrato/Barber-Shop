import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  selected: string;
  service: string;
  setSelected: () => void;
};

const ServiceList = ({ selected, service, setSelected }: Props) => {
  return (
    <>
      <TouchableOpacity
        style={styles(selected, service).button}
        onPress={setSelected}>
        <View />
        <Text style={styles().text}>{service}</Text>
        <View style={styles(selected, service).circle} />
      </TouchableOpacity>
    </>
  );
};

export default ServiceList;
