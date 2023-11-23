import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconType = {
  iconName: string;
  focused: boolean;
};

const TabIcon = ({ iconName, focused }: IconType) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 12,
        backgroundColor: focused ? 'white' : 'transparent',
        borderRadius: 99,
        height: 50,
        width: 50,
      }}>
      <Icon
        name={iconName}
        size={focused ? 35 : 30}
        color={focused ? '#704F38' : '#9A9B9E'}
      />
    </View>
  );
};

export default TabIcon;
