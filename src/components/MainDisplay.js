import React from 'react';
import movieData from '../test/test-data';
import Movie from './Movie';
import IndivdualView from './IndividualView';

class MainDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      individual: false,
      currentMovie: ""
    };
  }

  displayIndividual = (movie) => {
    console.log(movie)
    this.setState({
      individual: true,
      currentMovie: {
        backdrop: movie.backdrop,
        title: movie.title,
        rating: movie.rating
      }
    })
  }

  render() {
    const movies = this.state.movies.map(movie => <Movie  
      key={movie.id} 
      poster={movie.poster_path} 
      title={movie.title}
      backdrop={movie.backdrop_path}
      rating={movie.average_rating}
      showIndividual={this.displayIndividual}/>)
    return (
      <div>
        {this.state.individual && <IndivdualView />}
      <section className="main-display">
        {movies}
      </section>
      </div>
    )
  }
}


export default MainDisplay;
