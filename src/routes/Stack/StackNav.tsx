import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { default as Initial } from '../../pages/Auth/Initial';
import Register from '../../pages/Auth/Register/Register';
import Appointment from '../../pages/Home/Appointment/Appointment';
import ChooseBarber from '../../pages/Home/ChooseBarber/ChooseBarber';
import ChooseService from '../../pages/Home/ChooseService/ChooseService';
import Confirm from '../../pages/Home/Confirm/Confirm';
import Schedule from '../../pages/Home/Schedule/Schedule';
import Unity from '../../pages/Home/Unity/Unity';
import AuthPage from './AuthStack';

type StackNavigation = {
  Login: undefined;
  AuthPage: undefined;
  Home: undefined;
  Register: undefined;
  Initial: undefined;
  Unity: undefined;
  Service: {
    id?: number;
    local: string;
  };
  Barber: {
    local: string;
    service: string;
  };
  Schedule: {
    local: string;
    service: string;
    name: string;
  };
  Confirm: {
    local: string;
    service: string;
    schedule: string;
    name: string;
  };
  Appointment: undefined;
};

export type StackTypes = StackNavigationProp<StackNavigation>;

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen
        name="AuthPage"
        component={AuthPage}
        options={{ headerLeft: () => null, gestureEnabled: false }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Unity" component={Unity} />
      <Stack.Screen name="Service" component={ChooseService} />
      <Stack.Screen name="Barber" component={ChooseBarber} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Confirm" component={Confirm} />
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{ gestureEnabled: false, headerLeft: () => null }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
