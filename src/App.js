import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Movie from './components/Movie'
import SearchBar from './components/SearchBar'
import CustomerList from './components/CustomerList'
import Library from './components/Library'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return <h2>Home</h2>;
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
      <Router>
        <div>
          <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/library">Library</Link>
                <Link to="/customers">Customers</Link>
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


