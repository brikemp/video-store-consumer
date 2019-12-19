import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Customer.css'

const Customer = (props) => {
  const { id, name, selectCustomerCallback, displayButton } = props;
  return (
    <table className="table">
    
      <tr>
        <td>{name}</td>
        {displayButton === true ? <button onClick={() => { selectCustomerCallback(id) }}>Select</button> : " "}
      </tr>
      
    </table>
  );
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectCustomerCallback: PropTypes.func.isRequired
};

export default Customer;