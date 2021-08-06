const SET_THEME_MODE = 'SET_THEME_MODE';

export const setThemeMode = (setThemeMode: boolean) => {
  return { type: SET_THEME_MODE, setThemeMode };
};

type initState = {
  isDarkMode: boolean;
};

const initialState: initState = { isDarkMode: true };

export default function Settings(state = initialState, action: any) {
  console.log('action check: ', action);
  switch (action.type) {
    case SET_THEME_MODE:
      return { ...state, isDarkMode: action.setThemeMode };
    default:
      return state;
  }
}
