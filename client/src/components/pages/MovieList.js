import React from 'react';
import axios from 'axios';

import MovieItem from '../MovieItem';

class MovieList extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    this._fetchPopularMovies();
  }

  _fetchPopularMovies = async() => {
    const movies = await axios.get('/api/movie/popular');
    this.setState(() =>  ({ movies: movies.data }));
  }

  _renderMovieItems = () => {
    return this.state.movies.map(movie => {
      return <MovieItem movie={movie} key={movie.id} />;
    });
  }

  render() {
    const { movies } = this.state;
    if (!movies) {
      return <p>Loading...</p>;
    }

    return (
      <div className="container">
        <h1>Popular Movies</h1>
        <ul>
          {this._renderMovieItems()}
        </ul>
      </div>
    );
  }
}

export default MovieList;
