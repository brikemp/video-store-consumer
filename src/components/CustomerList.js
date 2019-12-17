import React, { Component } from 'react';
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
    const customerList = response.data.map((customer) => {
      return customer
    })
    this.setState({customerList})
  })
}

  getCustomers = () => {
    return this.state.customerList.map((customer) => {
      return (<Customer 
        key={customer.id}
        name={customer.name}
      />)
    })
  }

  render () {
    return (
    <div>
      {this.getCustomers()}
    </div>
  );
}
}

export default CustomerList;