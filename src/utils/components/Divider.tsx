import React from 'react';
import { View } from 'react-native';

type IMargin = {
  marginBot?: number;
};

const Divider = ({ marginBot }: IMargin) => {
  return (
    <View
      style={{
        height: 0.2,
        width: '100%',
        backgroundColor: 'white',
        marginBottom: marginBot,
      }}
    />
  );
};

export default Divider;
