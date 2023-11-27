import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScaledSheet, scale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../utils/themes/themes';
import InstaLogo from '../../atoms/InstaLogo';

type Props = {
  iconName?: string;
  size?: number;
  onPress?: () => void;
};

const CustomHeader = ({
  iconName = 'chevron-back-outline',
  size = scale(32),
  onPress,
}: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={iconName} size={size} color={colors.orange} />
      </TouchableOpacity>
      <InstaLogo />
    </View>
  );
};

const styles = ScaledSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: '20@s',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CustomHeader;
