import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import StackNav from './src/routes/Stack/StackNav';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
