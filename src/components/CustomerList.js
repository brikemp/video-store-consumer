import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import './CustomerList.css';
import Customer from './Customer'

class CustomerList extends Component {
  constructor() {
    super();
    
    this.state = {
      customerList: [],
    }
  }

  componentDidMount() { 
    axios.get("http://localhost:3000/customers") 
    .then((response)=>{
    let count = 1
    const customerList = response.data.map((customer) => {
      customer["id"] = count
      count += 1
      return customer
    })
    this.setState({customerList})
  })
}

  getCustomers = () => {
    return this.state.customerList.map((customer) => {
      return (<Customer 
        key={customer.id}
        id={customer.id}
        name={customer.name}
        displayButton={true}
        selectCustomerCallback={this.props.selectCustomerCallback}
      />)
    })
  }

  render () {
    return (
      
    <div className="customer-list"> <h2>Customer Names:</h2>
      {this.getCustomers()}
    </div>
  );
}
}

CustomerList.propTypes = {
  selectCustomerCallback: PropTypes.func
};

export default CustomerList;