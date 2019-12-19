import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = (props) => {
  const { id, title, movieCallback, buttonText, displayButton} = props;
  return (
    <table className="table">
      <tbody>
        <td>{title} </td> 
      
      <td className="select-button">{displayButton === true ? <button onClick={() => { movieCallback(id) } }> {buttonText} </button> : " " } </td>

      </tbody>
    </table>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  movieCallback: PropTypes.func,
};

export default Movie;