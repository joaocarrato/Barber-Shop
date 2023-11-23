import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingCircle = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={30} color={'blue'} />
    </View>
  );
};

export default LoadingCircle;
