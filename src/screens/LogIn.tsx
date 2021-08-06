import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseAsync, increaseAsync } from '../store/reducers/counter';
import { setLoggedIn } from '../store/reducers/loginState';
import { setThemeMode } from '../store/reducers/settings';
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 20px;
`;
const Btn = styled.TouchableOpacity`
  background-color: blue;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 4px;
`;
const DivText = styled.Text`
  font-weight: 800;
  color: white;
`;

export default function Home() {
  const counterNumber: number = useSelector((state: any) => state?.counter);
  const loginState: Boolean = useSelector(
    (state: any) => state.loginState.isLoggedIn
  );
  console.log('counterNumber: ', counterNumber);
  console.log('loginState', loginState);
  const dispatch = useDispatch();

  const onIncrease = () => {
    //   redux action으로 만들어진게 아니라 thunk로 만들어진 decreaseAsync를 불러와서 dispatch함
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    //   위와(onIncrease) 마찬가지 이유
    dispatch(decreaseAsync());
  };

  const onLogOut = () => {
    dispatch(setLoggedIn(true));
  };

  const onSetDarkMode = () => {
    dispatch(setThemeMode(true));
  };
  return (
    <Container>
      <View style={{ marginTop: 50 }}>
        <Btn onPress={onSetDarkMode}>
          <DivText>setDarkMode</DivText>
        </Btn>
      </View>
      <View style={{ marginTop: 50 }}>
        <Btn onPress={onIncrease}>
          <DivText>plus</DivText>
        </Btn>
        <DivText>{counterNumber}</DivText>
        <Btn onPress={onDecrease}>
          <DivText>minus</DivText>
        </Btn>
      </View>
      <View style={{ marginTop: 50 }}>
        <Btn onPress={onLogOut}>
          <DivText>log In!!</DivText>
        </Btn>
      </View>
    </Container>
  );
}
