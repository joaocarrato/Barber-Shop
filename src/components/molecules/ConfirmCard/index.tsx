import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  info: string;
};

const ConfirmCard = ({ title, info }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.textCard}>
        {title}
        {info}
      </Text>
    </View>
  );
};

export default ConfirmCard;
