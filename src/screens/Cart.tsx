import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
type Props = {
  navigation: any;
  route: any;
};
export default function Cart({ navigation, route }: Props) {
  // useEffect(() => {
  //   if (route?.params?.username) {
  //     navigation.setOptions({
  //       title: route.params.username,
  //     });
  //   }
  // }, [route.params.username]);

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>Cart</Text>
    </View>
  );
}
