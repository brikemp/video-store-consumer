import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => {
  const { id, title, movieCallback, buttonText, displayButton} = props;
  return (
    <div>
      {title}  
      {displayButton === true ? <button onClick={() => { movieCallback(id) } }> {buttonText} </button> : " " }
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  movieCallback: PropTypes.func,
};

export default Movie;