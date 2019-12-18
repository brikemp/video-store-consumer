import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '', 
      queryResults: [],
      error: '', 
      search_check: false, 
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }


  searchMovies = (event) => {
    console.log(event);
    axios.get('http://localhost:3000/movies/', { params: { query: this.state.query } } )
      .then(response => {
        const movies = response.data.map(movie => {
          return movie;
        });
        this.setState({
          queryResults: movies,
          search_check: true
        });
      })
      .catch((error) => {
        this.setState({ error: "No movies found" })
      })
  };


  render () {
    return (
      <div>
        <form onSubmit={this.searchMovies}>
          <h3>Search for a Movie</h3>
          <div>
            <label htmlFor="query">Movie Title:</label>
            <input
              type='text'
              onChange={this.onInputChange}
              value={this.state.query}
              name="query"
              id="query"
              className="search-bar"
            />
          </div>
          <button type="submit">Search</button>
        </form>
        <div>
          <h2>{this.state.searchCheck ? "Results" : '' }</h2>
          {this.state.queryResults}
        </div>
      </div>
    );
  }
};

export default SearchBar;
