import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => {
  const { id, title, selectMovieCallback, addMovieCallback} = props;
  return (
    <div>
      {title}

      <button onClick={() => { selectMovieCallback(id) } }> Select </button>
      
      <button onClick={() => { addMovieCallback(id) } }> Add </button>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selectMovieCallback: PropTypes.func,
  addMovieCallback: PropTypes.func
};

export default Movie;