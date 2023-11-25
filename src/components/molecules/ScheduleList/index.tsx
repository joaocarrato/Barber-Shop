import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { fonts } from '../../../utils/themes/fonts';
import { styles } from './styles';

type Props = {
  onPress: () => void;
  selected: string;
  hour: string;
};

const ScheduleList = ({ onPress, selected, hour }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles(selected, hour).button}>
      <Text style={styles().text}>{hour}</Text>
    </TouchableOpacity>
  );
};

export default ScheduleList;
