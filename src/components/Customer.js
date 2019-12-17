import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Customer.css'

const Customer = (props) => {

  return (
    <div>
      {props.name}
    </div>
  );
}

Customer.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Customer;