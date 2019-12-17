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
    const movieList = response.data.map((movie) => {
      return movie
    })
    this.setState({movieList})
  })
}

  getMovies = () => {
    return this.state.movieList.map((movie) => {
      return (<Movie 
        key={movie.id}
        title={movie.title}
      />)
    })
  }

  render () {
    return (
    <div>
      {this.getMovies()}
    </div>
  );
  }
  }

export default Library;