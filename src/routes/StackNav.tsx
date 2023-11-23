import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthPage from '../screens/AuthPage';
import Details from '../screens/Details';
import TabNav from './TabNav';

type StackNavigation = {
  Details: {
    id: string;
  };
  TabNav: undefined;
};

export type StackTypes = StackNavigationProp<StackNavigation>;

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthPage} />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{ headerLeft: () => null, gestureEnabled: false }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNav;
