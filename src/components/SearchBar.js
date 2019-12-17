import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

const SearchBar = (props) => {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      queryResults: [],
      error: '', 
    }
  }

  searchMovies = () => {
    axios.get('http://localhost:3000/movies?query=' + this.state.query)
      .then(response => {
        const movies = response.data.map(movie => {
          return movie;
        });
        this.setState({
          queryResults: movies,
        });
      })
      .catch((error) => {
        this.setState({ error: "sdgfhgjghfdz" })
      })
  };

  return (
    <section>
      <div>
        <label className="search-bar--label" htmlFor="searchBar">Search</label>
      </div>
      <input
        onChange={(event) => { searchChangeCallback(event.target.value) }}
        value={searchTerm}
        name="searchBar"
        id="searchBar"
        className="search-bar"
      />
    </section>
  );
};

SearchBar.propTypes = {
  searchChangeCallback: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SearchBar;
