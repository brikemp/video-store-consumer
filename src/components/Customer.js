import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Customer.css'

const Customer = (props) => {
  const { id, name, selectCustomerCallback } = props;
  return (
    <div>
      {name}
      <button onClick={() => { selectCustomerCallback(id) }}/>
    </div>
  );
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectCustomerCallback: PropTypes.func.isRequired
};

export default Customer;