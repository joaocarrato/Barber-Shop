import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import TabIcon from '../utils/TabIcon';

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
        tabBarStyle: {
          backgroundColor: '#1F2029',
          height: 75,
          alignSelf: 'center',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 40,
          left: 20,
          right: 20,
          elevation: 0,
        },
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
