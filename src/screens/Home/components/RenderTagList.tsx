import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import axios from '../../../axios';

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

type Props = {
  CategoryList: {
    id: Number;
    name: String;
    requests: String;
  }[];
  setData: any;
  getRequests: any;
  setRequests: any;
};
const RenderTagList = ({
  CategoryList,
  setData,
  getRequests,
  setRequests,
}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTag, setSelectedTag] = useState(0);

  const onRefresh = async () => {
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
  };

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
    <TagListWrapper>
      <FlatList
        // 아이템 사이에는 적용되지만 맨 위와 맨 아래에는 적용되지 않는 컴포넌트
        // 희미한 seperator선을 만들기 위한 작업
        ItemSeparatorComponent={() => (
          <View
            style={
              {
                // backgroundColor: 'red',
                // margin: 5,
              }
            }
          ></View>
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
        data={CategoryList}
        keyExtractor={item => '' + item.id}
        renderItem={renderTagList}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </TagListWrapper>
  );
};

export default RenderTagList;
