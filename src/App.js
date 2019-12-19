import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Movie from './components/Movie'
import SearchBar from './components/SearchBar'
import CustomerList from './components/CustomerList'
import Customer from './components/Customer'
import Library from './components/Library'
import Rental from './components/Rental'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/2000px-Blockbuster_logo.svg.png" alt="Blockbuster logo" className="blockbuster"/>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: "",
      selectedCustomer: "",
      movieList: []

    }
  }


checkout = () => {
    const params = {
      title: this.state.selectedMovie.title,
      customer_id: this.state.selectedCustomer.id,
      due_date: new Date(Date.now() + 700000000),    
    };

    URL = '';
    axios.post('http://localhost:3000/rentals/' + this.state.selectedMovie.title.toString() + '/check-out', params)
      .then(response => {
        console.log("success");
        this.setState({
          selectedMovie: "",
          selectedCustomer: "",
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  };


onSelectMovie = (movieId) => {
  axios.get("http://localhost:3000/movies") 
    .then((response)=>{
    let count = 1
    const movieList = response.data.map((movie) => {
      movie["id"] = count
      count += 1
      return movie
    })

  const selectedMovie = movieList.find((movie) => {
    return movie.id === movieId;
  });
  if (selectedMovie) {
    this.setState({ selectedMovie});
    console.log(selectedMovie);
    
  };
});
}

onSelectCustomer = (customerId) => {
  axios.get("http://localhost:3000/customers") 
    .then((response)=>{
    let count = 1
    const customerList = response.data.map((customer) => {
      customer["id"] = count
      count += 1
      return customer
    })

    const selectedCustomer = customerList.find((customer) => {
      return customer.id === customerId;
    });
    if (selectedCustomer) {
      this.setState({ selectedCustomer});
      console.log(selectedCustomer);
      
    };
  });
}


  render () {
    return (
      <div>
        <section className="selected-items">
          <div>
            {this.state.selectedCustomer === "" ? "" : "Customer: " }
            {this.state.selectedCustomer === "" ? "" : <Customer name={this.state.selectedCustomer.name} id={this.state.selectedCustomer.id} displayButton={false}/>}
          </div>
          <div>
            {this.state.selectedMovie === "" ? "" : "Movie to Checkout: " }
            {this.state.selectedMovie === "" ? "" : <Movie title={this.state.selectedMovie.title} id={this.state.selectedMovie.id} displayButton={false}/>}
          </div>
          <div>
            {this.state.selectedCustomer !== "" && this.state.selectedMovie !== "" ? <Rental movie={this.state.selectedMovie} customer={this.state.selectedCustomer} rentalCallback={this.checkout}/> : ""}
          </div>
        </section>

        <Router>
          <div>
            <nav className="navbar navbar-width">
                <a class="navbar-brand" href="/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/2000px-Blockbuster_logo.svg.png" className="logo-size" alt="blockbuster logo" />
                </a>
                <Link className="nav-link" to="/search">Search</Link>
                <Link className="nav-link" to="/library">Library</Link>
                <Link className="nav-link" to="/customers">Customers</Link>
            </nav>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search" component={SearchBar} />
              <Route path="/library" 
                render={(props) => <Library {...props} selectMovieCallback={this.onSelectMovie}/> } />

              <Route path="/customers" 
                render={(props) => <CustomerList {...props} selectCustomerCallback={this.onSelectCustomer} />} />
            </Switch>
          </div>
          
        </Router>

      </div>
    );
  }
}

export default App;


