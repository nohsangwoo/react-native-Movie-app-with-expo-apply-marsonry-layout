import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../../store/reducers/loginState';
import styled from 'styled-components/native';
import axios from '../../axios';
import requests from '../../Request';
import RenderItemsComp from './components/RenderItemsComp';
import RenderTagList from './components/RenderTagList';

import { useNavigation } from '@react-navigation/native';
const HomeWrapper = styled(View)`
  margin: 60px 0;
  background: white;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SubTitle = styled.Text`
  background-color: white;
  width: 100%;
  font-size: 16px;
  text-align: left;
  font-weight: 600;
  color: #747474;
  padding: 0 14px;
  padding-top: 50px;
`;

const TagListWrapper = styled(View)`
  display: flex;
  background: white;
  width: 100%;
`;

const TagWrapper = styled(View)`
  margin: 25px 4px;
`;

const TagBtn = styled.TouchableOpacity<{ tagId: Number; selectedTag: Number }>`
  display: flex;
  background-color: ${props =>
    props.tagId === props.selectedTag ? '#111111' : '#f5f5f5'};
  justify-content: center;
  /* padding: 5px 10px; */
  border-radius: 24px;
  width: 81px;
  height: 48px;
`;

const TagName = styled.Text<{ tagId: Number; selectedTag: Number }>`
  font-size: 13px;
  color: ${props =>
    props.tagId === props.selectedTag ? '#FFFFFF' : '#747474'};
  text-align: center;
`;

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTag, setSelectedTag] = useState(0);
  // const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const loginState = useSelector<{ loginState: any }>(
    state => state.loginState?.isLoggedIn
  );
  const [data, setData] = useState();
  const { width, height } = useWindowDimensions();
  const [getRequests, setRequests] = useState(requests.fetchPopular);
  const navigation = useNavigation();

  const CategoryList = [
    { id: 0, name: 'Poppular', requests: requests.fetchPopular },
    { id: 1, name: 'Trending', requests: requests.fetchTrending },
    {
      id: 2,
      name: 'NetflixOriginal',
      requests: requests.fetchNetflixOriginals,
    },
    { id: 3, name: 'TopRated', requests: requests.fetchTopRated },
    { id: 4, name: 'Action', requests: requests.fetchActionMovies },
    { id: 5, name: 'Comedy', requests: requests.fetchComedyMovies },
    { id: 6, name: 'Horror', requests: requests.fetchHorrorMovies },
    { id: 7, name: 'Romance', requests: requests.fetchRomanceMovies },
    { id: 8, name: 'Documentaries', requests: requests.fetchDocumentaries },
  ];
  // console.log('loginState', loginState);
  // hsl(0, 0%, 6.666666666666667%)
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    (async function getMovies() {
      try {
        const res = await axios.get(getRequests);
        setData(res?.data?.results);
      } catch (e) {
        console.log(e.message);
      }
    })();
    setRefreshing(false);
  }, [getRequests, data]);

  const onLogIn = () => {
    dispatch(setLoggedIn(false));
  };

  useEffect(() => {
    // console.log('requsetfetURL?: ', requests.fetchPopular);

    (async function getMovies() {
      try {
        const res = await axios.get(getRequests);
        setData(res?.data?.results);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, [getRequests]);

  const renderTagList = (item: any) => {
    return (
      <TagWrapper>
        <TagBtn
          tagId={item.index}
          selectedTag={selectedTag}
          onPress={() => {
            setSelectedTag(item.item.id);
            setRequests(item.item.requests);
            return;
          }}
        >
          <TagName tagId={item.index} selectedTag={selectedTag}>
            {item.item.name}
          </TagName>
        </TagBtn>
      </TagWrapper>
    );
  };

  return (
    <HomeWrapper>
      {/* <View>
        <Btn onPress={onLogIn}>
          <DivText>log out!!!</DivText>
        </Btn>
        <Btn onPress={() => setRequests(requests.fetchComedyMovies)}>
          <DivText>setOtherFetch</DivText>
        </Btn>
      </View> */}
      <SubTitle
        onPress={() =>
          navigation.navigate('HomeProductDetail', {
            name: 'nohsangwoo',
          })
        }
      >
        제품 보기
      </SubTitle>

      <RenderTagList
        CategoryList={CategoryList}
        setData={setData}
        getRequests={getRequests}
        setRequests={setRequests}
      />

      <RenderItemsComp data={data} />
    </HomeWrapper>
  );
}
