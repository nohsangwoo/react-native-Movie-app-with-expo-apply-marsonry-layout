import axios from 'axios';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original/';
export const NONE_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_None.svg/1280px-Flag_of_None.svg.png';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
