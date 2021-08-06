const SET_LOGGED_IN = 'SET_LOGGED_IN';
// const DECREASE = 'DECREASE';

export const setLoggedIn = (loginState: Boolean) => {
  return { type: SET_LOGGED_IN, loginState };
};

// export const increaseAsync = () => (dispatch, getState) => {
//   const state = getState();
//   console.log('increaseGetState', state);
//   setTimeout(() => dispatch(increase()), 1000);
// };
type initState = {
  token: String;
  isLoggedIn: Boolean;
};

const initialState: initState = { token: 'basicToken', isLoggedIn: false };

export default function loginState(state = initialState, action: any) {
  console.log('action check: ', action);
  switch (action.type) {
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.loginState };
    default:
      return state;
  }
}
