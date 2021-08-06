import { combineReducers } from 'redux';
import counter from './counter';
import somesome from './someOther';
import posts from './posts';
import loginState from './loginState';
import settings from './settings';
import { all } from 'redux-saga/effects';
import sagaCounter, { counterSaga } from './sagacounter';

const rootReducer = combineReducers({
  counter,
  somesome,
  posts,
  loginState,
  settings,
  sagaCounter,
});

export function* rootSaga() {
  yield all([counterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
