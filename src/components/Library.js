import React, { Component } from 'react';
import axios from 'axios'
import './Library.css';
import Movie from './Movie'

class Library extends Component {
  constructor() {
    super();
    
    this.state = {
      movieList: [],
    }
  }

  componentDidMount() { 
    axios.get("http://localhost:3000/movies") 
    .then((response)=>{
    let count = 1
    const movieList = response.data.map((movie) => {
      movie["id"] = count
      count += 1
      return movie
    })
    this.setState({movieList})
  })
}

  getMovies = () => {
    return this.state.movieList.map((movie) => {
      return (<Movie 
        id={movie.id}
        title={movie.title}
        selectMovieCallback={this.props.selectMovieCallback}

      />)
    })
  }

  render () {
    return (
    <div>
      <h2>Movie Titles:</h2>
      {this.getMovies()}
    </div>
  );
  }
  }

export default Library;