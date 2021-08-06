import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

const ProductDetailWrapper = styled(View)``;

const ProductDetail = () => {
  const navigation = useNavigation();

  type RouteParams = {
    key: String;
    name: String;
    params: { name: String };
  };
  const route: any = useRoute();

  const {
    params: { name },
  }: RouteParams = route;

  console.log(route);
  console.log(route.params);
  console.log(name);

  //   navigation  title 변경하는 옵션 이걸로 여러가지 장난 칠수있을듯
  useEffect(() => {
    navigation.setOptions({
      title: `${name}`,
    });
  }, []);
  return (
    <ProductDetailWrapper>
      <Text>hi it product Detailsdd</Text>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
