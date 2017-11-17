import React from 'react';
import axios from 'axios';

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

  render() {
    return (
      <div>
        <h1>Popular Movies</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default MovieList;
