import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

type Props = {
  navigation: any;
  route: any;
};

export default function Search({ navigation, route }: Props) {
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
      <Text style={{ color: 'white' }}>Search</Text>
    </View>
  );
}
