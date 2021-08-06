# init setting up

https://docs.expo.io/guides/typescript/

- install redux, redux-saga, redux-thunk
  import { Provider } from 'react-redux';
  redux-logger, react-redux, react-redux

npm install @react-navigation/native

- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

@react-navigation/stack

# watchman 재설치

- brew install watchman 
(m1의 경우 brew설치방법 검색 ㄱ 인텔용 삭제 Or 우회)

# expo 버젼 확인
- 4.7.2 기준 정상작동


# App loading...

- https://docs.expo.io/versions/latest/sdk/app-loading/
- expo install expo-app-loading
  expo install expo-font

# styled-components

- styled-components

# redux things

- @react-native-async-storage/async-storage
  <!-- for react native redux async storage -->
- apply redux thunk
- apply persist

# nav 디렉토리 변경 stack => tab > stack

# src로 디렉토리로 합치기

# tabNav 적용

https://reactnavigation.org/docs/bottom-tab-navigator

- npm install @react-navigation/bottom-tabs

# darkModeSetting

- 총괄 레이아웃을 하나만들고 그안에 props.theme에서 값을 가져옴
- 이때 settings.themeMode을 조건에따라 dark mode 또는 light mode로 지정해준다
- global styled 적용하는법 (일단 styled components로는 안됨)
- 점진적으로 tsx 적용

# icon

https://icons.expo.fyi/

# axios

- npm install -save axios

# env적용

# apply flatList

for test

# marsonry layout

npm install @react-native-seoul/masonry-list

- https://github.com/hyochan/react-native-masonry-list

# src 폴더로 합치기

```
  "main": "node_modules/expo/AppEntry.js", => "index.js",
```

# expo사용시와 eject시 root/index 설정

# reduxdevtools in redux?

https://velog.io/@dody_/RN-Library-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EB%94%94%EB%B2%84%EA%B1%B0-%EB%8F%84%EA%B5%AC-react-native-debugger-redux-devtools-react-native-debugger-open

# issue about - Could not find a declaration file for module 'react/jsx-runtime'

- https://github.com/facebook/create-react-app/issues/10109
