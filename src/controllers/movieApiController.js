import axios from 'axios';

import keys from '../../config/keys';

const baseURL = 'https://api.themoviedb.org';
const apiKey = keys.movieAPIKey;

function filterByGenre(collection, genreId) {
  return collection.filter(item => {
    if (item.genre_ids.includes(genreId)) {
      return item;
    }
  });
}

export const genreList = async(req, res) => {
  const genres = await axios.get(
    `${baseURL}/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
  res.send(genres.data);
};

export const popularMovies = async(req, res) => {
  const movies = await axios.get(
    `${baseURL}/3/movie/popular?api_key=${apiKey}&language=en-US`
  );

  const filteredMovies = filterByGenre(movies.data.results, 27);
  res.send(filteredMovies);
};

export const topRatedMovies = async(req, res) => {
  const movies = await axios.get(
    `${baseURL}/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
  );

  const filteredMovies = filterByGenre(movies.data.results, 27);
  res.send(filteredMovies);
};

export const upcomingMovies = async(req, res) => {
  const movies = await axios.get(
    `${baseURL}/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
  );

  const filteredMovies = filterByGenre(movies.data.results, 27);
  res.send(filteredMovies);
};
