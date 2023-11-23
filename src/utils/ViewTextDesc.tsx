import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  title: string;
  subTitle: string;
  subSection?: string;
};

const ViewTextDesc = ({ title, subTitle, subSection }: Props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ fontSize: 14 }}>
        {subTitle} {subSection}
      </Text>
    </View>
  );
};

export default ViewTextDesc;
