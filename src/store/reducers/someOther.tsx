const SOMEFFF = 'SOMEFFF';
const SOMEAAAAAA = 'SOMEAAAAAA';

export const someA = () => ({ type: SOMEFFF });
export const someB = () => ({ type: SOMEAAAAAA });

// const initialState = { oth: 123, name: 'asdfasdfasdfsa' };
const initialState = 0;

export default function somesome(state = initialState, action: any) {
  switch (action.type) {
    case SOMEFFF:
      return state + 1;
    case SOMEAAAAAA:
      return state - 1;
    default:
      return state;
  }
}
