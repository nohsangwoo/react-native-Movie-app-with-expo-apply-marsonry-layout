import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from '../screens/Home';
import HomeInNav from './HomeInStack';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import My from '../screens/My';
import Cart from '../screens/Cart';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export default function SharedStackNav({ screenName }) {
  const chooseScreenAndRender = screenName => {
    switch (screenName) {
      case 'Home':
        return (
          <Stack.Screen
            name={'Home'}
            component={HomeInNav}
            options={{
              // headerTitle꾸미는 방법
              headerTitle: () => (
                // headerTitle에 태그 넣는 방법
                <Image
                  style={{
                    width: 120,
                    height: 40,
                  }}
                  resizeMode="contain"
                  source={require('../assets/logo.png')}
                />
              ),
              headerShown: true,
            }}
          />
        );
      case 'Search':
        return <Stack.Screen name={'Search'} component={Search} />;
      case 'Profile':
        return <Stack.Screen name={'Profile'} component={Profile} />;
      case 'My':
        return <Stack.Screen name={'My'} component={My} />;
      case 'Cart':
        return <Stack.Screen name={'Cart'} component={Cart} />;
      default:
        return null;
    }
  };
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        // headerBackTitleVisible: false,
        // headerTintColor: 'white',
        headerStyle: {
          shadowColor: 'rgba(255, 255, 255, 0.3)',
          // backgroundColor: 'black',
        },
      }}
    >
      {/* 일단 해당 tab에서 처음으로 렌더링 되는 component를 초기화 */}
      {chooseScreenAndRender(screenName)}
    </Stack.Navigator>
  );
}
