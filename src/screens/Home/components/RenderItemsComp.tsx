import React from 'react';
import styled from 'styled-components';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { IMG_BASE_URL, NONE_IMG } from '../../../axios';
import { useNavigation } from '@react-navigation/native';

const RenderItems = styled(View)`
  align-items: center;
  justify-content: center;
  width: 100%;
  background: white;
`;

const ItemWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 4px;
  position: relative;
`;

const ItemImage = styled(Image)<{ heightValue: any }>`
  width: 100%;
  height: ${props => {
    return `${String(props.heightValue)}px`;
  }};
  border-radius: 10px;
  align-self: stretch;
`;

const TouchWrapper = styled(TouchableOpacity)`
  border: 1px solid red;
  width: 100%;
  position: absolute;
`;

type Props = {
  data: any;
};

const RenderItemsComp = ({ data }: Props) => {
  const renderFetchData = (item: any) => {
    const IMG_URI = IMG_BASE_URL + item.item.poster_path || NONE_IMG;
    const navigation = useNavigation();

    const GET_HEIGHT = () => {
      const heights = [137, 194, 215, 222, 255, 264, 263, 314];
      const getHeight = (heights: Number[]) => {
        return heights[Math.floor(Math.random() * heights.length)];
      };
      const result = getHeight(heights);
      return result;
    };

    const GET_HEIGHT_VALUE = GET_HEIGHT();
    return (
      <ItemWrapper key={item.item.id}>
        <ItemImage
          source={{ uri: IMG_URI }}
          resizeMode="cover"
          heightValue={GET_HEIGHT_VALUE}
        />

        <TouchWrapper
          style={{ height: +GET_HEIGHT_VALUE }}
          onPress={() =>
            navigation.navigate('HomeProductDetail', { name: 'KIM' })
          }
        >
          {/* <Text>OK</Text> */}
        </TouchWrapper>
      </ItemWrapper>
    );
  };

  return (
    <RenderItems>
      {data && (
        <MasonryList
          // // refreshing을 할수있는 상태인지 아닌지 true면 새로고침할수있는 상태
          // // false면 새로고침 기능 비활성화
          // refreshing={refreshing}
          // // 새로고침 실행시 작동하는 함수
          // onRefresh={refresh}

          style={
            {
              // width: '100%',
              // backgroundColor: 'blue',
            }
          }
          contentContainerStyle={{
            paddingHorizontal: 0,
            alignSelf: 'stretch',
            paddingBottom: 120,
          }}
          // 세로 스크롤바를 안보이게 설정
          // showsVerticalScrollIndicator={false}
          // 사용법
          // 사용되는 데이터(리스트)를 넣어주고
          data={data}
          numColumns={2}
          // 고유 식별자 (map돌릴때 key랑 같은기능)
          // key={photo.id} 라는 뜻이랑 같다
          // @ts-ignore
          keyExtractor={data => '' + data.id}
          // 해당 데이터를 어떻게 가공해서 렌더링할건지 정한 컴포넌트를 집어넣고
          renderItem={renderFetchData}
        />
      )}
    </RenderItems>
  );
};

export default RenderItemsComp;
