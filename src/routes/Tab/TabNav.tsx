import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../pages/Home/Home';
import Settings from '../../pages/Settings/Settings';
import TabIcon from '../../utils/components/TabIcon';
import { styles } from '../styles';

type TabNavigation = {
  Home: undefined;
  Settings: undefined;
};

export type TabTypes = BottomTabNavigationProp<TabNavigation>;

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bottomTabStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                iconName={focused ? 'home' : 'home-outline'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                iconName={focused ? 'cog' : 'cog-outline'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
