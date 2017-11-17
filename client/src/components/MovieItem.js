import React from 'react';
import { object } from 'prop-types';

MovieItem.propTypes = {
  movie: object
};

function MovieItem(props) {
  return (
    <li>{props.movie.title}</li>
  );
}

export default MovieItem;
