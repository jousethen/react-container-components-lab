import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1NrozytypGDHUusq9NP572WzxgY5EitZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchAbleMovieReviews extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>

      </div>
    )
  }
}