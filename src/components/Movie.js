import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => {
  const { id, title, selectMovieCallback } = props;
  return (
    <div>
      {title}
      <button onClick={() => { selectMovieCallback(id) }}/>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selectMovieCallback: PropTypes.func.isRequired
};

export default Movie;