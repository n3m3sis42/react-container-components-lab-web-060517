import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
let SEARCH_TERM = '';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';
const AUTH_PARAM = `api-key=${NYT_API_KEY}`;
let URL;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    };
  }

  updateSearchTerm = (event) => {
    this.setState ({
      searchTerm: event.target.value
    }, () => {SEARCH_TERM = this.state.searchTerm})
  }

  fetchReviews() {
    if (SEARCH_TERM) {
      URL = BASE_URL + `query=${SEARCH_TERM}&` + AUTH_PARAM
    }
    else {
      URL = BASE_URL+ AUTH_PARAM
    }
    console.log(URL)
    fetch(URL)
      .then(response => response.json())
      .then((reviews => this.setState({ reviews: reviews.results })));
  }

  componentDidUpdate() {
    this.fetchReviews()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input type="text" onChange={this.updateSearchTerm} value={this.state.searchTerm}/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
