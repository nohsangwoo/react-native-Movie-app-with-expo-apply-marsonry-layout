import React from 'react';
import { useSelector } from 'react-redux';
import LoggedOutNav from './LoggedOutNav';
import LoggedInNav from './LoggedInNav';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
// import axios from 'axios';
// import getEnvVars from '../environment';

export default function CheckLogin() {
  const isLoggedIn = useSelector(state => state.loginState.isLoggedIn);
  const isDarkMode = useSelector(state => state.settings.isDarkMode);

  console.log('isLoggedIn?: ', isLoggedIn);
  console.log('isDarkMode?: ', isDarkMode);
  // console.log('apiUrl: ', apiUrl);

  // axios
  //   .get(
  //     'https://api.themoviedb.org/3/movie/popular?api_key=200aa47b7c88f369e8d2cd6d8db21dfb&language=en-US&page=1'
  //   )
  //   .then(function (response) {
  //     console.log('response TMDB', response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ThemeProvider>
  );
}
