import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  subTitle: string;
  subSection?: string;
};

const ViewTextDesc = ({ title, subTitle, subSection }: Props) => {
  return (
    <View style={styles().center}>
      <Text style={styles().title}>{title}</Text>
      <Text style={styles().subTitle}>
        {subTitle} {subSection}
      </Text>
    </View>
  );
};

export default ViewTextDesc;
