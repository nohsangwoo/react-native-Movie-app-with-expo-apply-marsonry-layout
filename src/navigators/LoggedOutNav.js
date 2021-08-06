import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LogIn';
import { useSelector, useDispatch } from 'react-redux';

const Stack = createStackNavigator();

export default function LoggedInNav() {
  const isLoggedIn = useSelector(state => state.loginState.isLoggedIn);

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
