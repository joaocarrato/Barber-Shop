import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { StackTypes } from '../../../routes/StackNav';

interface Props {
  name: string;
  avatar: string;
  id: string;
}

const BarberCard = ({ name, avatar, id }: Props) => {
  const navigation = useNavigation<StackTypes>();

  return (
    <View
      style={{
        flex: 1,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', { id })}>
        <Image
          source={{ uri: avatar }}
          style={{ height: 80, width: 80, borderRadius: 99, marginBottom: 12 }}
        />
      </TouchableOpacity>
      <Text>{name}</Text>
    </View>
  );
};

export default BarberCard;
