const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch: any, getState: any) => {
  const state = getState();
  console.log('increaseGetState', state);
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => (dispatch: any) => {
  console.log('decreaseAsync');
  setTimeout(() => dispatch(decrease()), 1000);
};

type initState = number;
const initialState: initState = 0;

export default function counter(state = initialState, action: any) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
