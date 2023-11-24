import React from 'react';
import { FlatList } from 'react-native';
import { IBarber } from '../../../services/interfaces/interface';
import BarberCard from '../../molecules/BarberCard';

type Props = {
  data?: IBarber[];
};

const BarbersList = ({ data }: Props) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <BarberCard name={item.name} avatar={item.avatar} id={item.id} />
      )}
    />
  );
};

export default BarbersList;
