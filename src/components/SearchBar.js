import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from './Movie'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '', 
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
    event.preventDefault();

    console.log("This is working 1");

    axios.get(`http://localhost:3000/movies?query=${this.state.title}`)
      .then((response) => {
        const queryResults = response.data.map(movie => {
          return movie;
        });
        this.setState({queryResults});
      })
      .catch((error) => {
        this.setState({ error: "No movies found" })
      })
  };


  addMovie = (id) => {
    const movie = movieList.find((id) => {
      return movie.id === movieId;
    });
    axios.post("http://localhost:3000/movies/", {
      key: movie.id,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      image_url: movie.image_url,
      external_id: movie.external_id,
      inventory: Math.floor((Math.random() * 100) + 1)
    })
    .then((response) => {
      console.log("success")
    })
  }

  makeMovies = () => {
    return this.state.queryResults.map((movie) => {
      return (<Movie
        key={movie.external_id}
        id={movie.external_id}
        title={movie.title} 
        addMovieCallback={this.addMovie}/>)
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.searchMovies}>
          <h3>Search for a Movie</h3>
          <div>
            <label htmlFor="title">Movie Title:</label>
            <input
              type='text'
              onChange={this.onInputChange}
              value={this.state.query}
              name="title"
              id="title"
              className="search-bar"
            />
          </div>
          <button type="submit">Search</button>
        </form>

          <div>
            {this.makeMovies()}
            
        
          </div>
      </div>
    );
  }
};

SearchBar.propTypes = {
    query: PropTypes.string, 
};


export default SearchBar;
