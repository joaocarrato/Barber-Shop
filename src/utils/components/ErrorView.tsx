import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  errorName: string;
};

const ErrorView = ({ errorName }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorName}</Text>
    </View>
  );
};

export default ErrorView;
