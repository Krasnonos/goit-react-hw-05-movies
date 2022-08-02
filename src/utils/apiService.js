import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '868ea864f997e5bae8bc1f12eccd969d';

export const getPopularMovie = async () => {
  const res = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  return res.data.results;
};

export const getMovieDetails = async id => {
  const res = await axios(`/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieCasts = async id => {
  const res = await axios(`/movie/${id}/credits?api_key=${API_KEY}`);
  return res.data.cast;
};

export const getMovieReviews = async id => {
  const res = await axios(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return res.data.results;
};

export const getMoviesByName = async name => {
  const res = await axios(`/search/movie?query=${name}&api_key=${API_KEY}`);
  return res.data.results;
};
