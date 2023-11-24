import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthPage from '../../pages/Auth/AuthPage';
import Login from '../../pages/Auth/Login/Login';
import Register from '../../pages/Auth/Register/Register';
import Details from '../../pages/Details/Details';
import Home from '../../pages/Home/Home';

type StackNavigation = {
  Details: {
    id: string;
  };
  TabNav: undefined;
  Login: undefined;
  AuthPage: undefined;
  Home: undefined;
  Register: undefined;
};

export type StackTypes = StackNavigationProp<StackNavigation>;

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Auth">
      <Stack.Screen name="Auth" component={AuthPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerLeft: () => null, gestureEnabled: false }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNav;
