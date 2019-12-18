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


  render () {
    return (
      <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>            
              <li>
                <Link to="/customers">Customers</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={SearchBar} />
            <Route path="/library" component={Library} 
              />
            <Route path="/customers" component={CustomerList} />
          </Switch>
        </div>
        
      </Router>
      <Library selectMovieCallback={this.onSelectMovie} />
      </div>
    );
  }
}

export default App;


