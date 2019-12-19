import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Rental.css';

const Rental = (props) => {
  const { movie, customer, rentalCallback} = props;
  return (
    <div>
      <button onClick={() => { rentalCallback() } }> Checkout </button>
    </div>
  );
}

Rental.propTypes = {
  movie: PropTypes.isRequired,
  customer: PropTypes.isRequired,
};

export default Rental;