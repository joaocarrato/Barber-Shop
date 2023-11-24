import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

type IconType = {
  iconName: string;
  focused: boolean;
};

const TabIcon = ({ iconName, focused }: IconType) => {
  return (
    <View style={styles(focused).tabIconView}>
      <Icon
        name={iconName}
        size={focused ? 35 : 30}
        color={focused ? '#4e5594' : '#9A9B9E'}
      />
    </View>
  );
};

export default TabIcon;
