import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../utils/themes/themes';
import InstaLogo from '../../atoms/InstaLogo';

type Props = {
  iconName: string;
  size?: number;
  onPress?: () => void;
};

const CustomHeader = ({ iconName, size, onPress }: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={iconName} size={size} color={colors.orange} />
      </TouchableOpacity>
      <InstaLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CustomHeader;
