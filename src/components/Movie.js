import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => {

  return (
    <div>
      {props.title}
    </div>
  );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Movie;