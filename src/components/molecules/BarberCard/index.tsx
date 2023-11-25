import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { StackTypes } from '../../../routes/Stack/StackNav';
import { styles } from './styles';

type Prop = {
  name: string;

  avatar: string;
  local: string;
  service: string;
};

const BarberCard = ({ avatar, name, local, service }: Prop) => {
  const navigation = useNavigation<StackTypes>();

  return (
    <TouchableOpacity
      style={{ margin: 8 }}
      onPress={() => navigation.navigate('Schedule', { name, local, service })}>
      <Image source={{ uri: avatar }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default BarberCard;
