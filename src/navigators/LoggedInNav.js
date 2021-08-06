import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import TabsNav from './TabsNav';
import { useSelector, useDispatch } from 'react-redux';

const Stack = createStackNavigator();

export default function LoggedInNav() {
  const isLoggedIn = useSelector(state => state.loginState.isLoggedIn);

  return (
    <Stack.Navigator mode="modal" initialRouteName="Tabs">
      <Stack.Screen
        name="Tabs"
        options={{ headerShown: false }}
        component={TabsNav}
      />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
}
