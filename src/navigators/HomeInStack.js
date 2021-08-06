import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ProductDetaul from '../screens/ProductDetail';
// import TabsNav from './TabsNav';
// import { useSelector, useDispatch } from 'react-redux';

const Stack = createStackNavigator();

export default function LoggedInNav() {
  //   const isLoggedIn = useSelector(state => state.loginState.isLoggedIn);

  return (
    <Stack.Navigator
      initialRouteName="HomeInNav"
      options={{ headerShown: false }}
    >
      <Stack.Screen
        name="HomeStack"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="HomeProductDetail"
        options={{
          // headerShown: false
          // headerTitle: 'productsName',
          headerBackTitleVisible: false,
        }}
        component={ProductDetaul}
      />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
}
