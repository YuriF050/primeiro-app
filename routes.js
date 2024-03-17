import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
