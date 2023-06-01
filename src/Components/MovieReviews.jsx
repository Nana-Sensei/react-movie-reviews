import React, { Component } from 'react';

class MovieReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=3AnqdqcAh9BPx7gOJCbX7qsohsT8hRjO")
      .then((res) => res.json())
      .then((movies) => {
        this.setState({movies:movies.results});
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="movies">
        <h1 style={{color:"#233b67"}}>| MOVIE REVIEWS &rarr;</h1>
        {this.state.movies.map(movie=> <div className="reviews">
          <h2 style={{color:"#fed38e", fontWeight:"bold"}}>{movie.display_title}</h2>
          <hr className="line"/>
          <p className="p-tag" style={{fontWeight:"Bold"}}>{movie.byline}</p>
          <p className="p-tag">{movie.headline}</p>
          <p className="p-tag">Critics Pick: {movie.critics_pick}</p>
        </div>)}
      </div>
    )
  }
}

export default MovieReviews;





