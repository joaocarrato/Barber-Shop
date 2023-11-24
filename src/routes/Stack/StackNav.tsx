import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { default as Initial } from '../../pages/Auth/Initial';
import Register from '../../pages/Auth/Register/Register';
import AuthPage from './AuthStack';

type StackNavigation = {
  Login: undefined;
  AuthPage: undefined;
  Home: undefined;
  Register: undefined;
  Initial: undefined;
};

export type StackTypes = StackNavigationProp<StackNavigation>;

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="AuthPage" component={AuthPage} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default StackNav;
