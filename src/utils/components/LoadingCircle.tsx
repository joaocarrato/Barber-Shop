import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

const LoadingCircle = () => {
  return (
    <View style={styles().container}>
      <ActivityIndicator size={30} color={'blue'} />
    </View>
  );
};

export default LoadingCircle;
