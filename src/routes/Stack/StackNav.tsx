import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthPage from '../../pages/Auth/AuthPage';
import Login from '../../pages/Auth/Login/Login';
import Details from '../../pages/Details/Details';
import TabNav from '../Tab/TabNav';

type StackNavigation = {
  Details: {
    id: string;
  };
  TabNav: undefined;
  Login: undefined;
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
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNav;
