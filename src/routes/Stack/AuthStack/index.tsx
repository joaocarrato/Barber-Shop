import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import Login from '../../../pages/Auth/Login/Login';
import Home from '../../../pages/Home/Home';

const Stack = createStackNavigator();

const AuthPage = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged(_user => {
      setUser(_user);
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerLeft: () => null, gestureEnabled: false }}
        />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AuthPage;
