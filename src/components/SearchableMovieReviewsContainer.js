import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1NrozytypGDHUusq9NP572WzxgY5EitZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviews extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }


  inputHandler = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.results)
        this.setState({
          reviews: data
        });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.submitHandler(event)}>
          <input onChange={event => this.inputHandler(event)} value={this.state.searchTerm} />
        </form>

        {this.state.reviews.length > 0 ? <MovieReviews reviews={this.state.reviews} /> : null}
      </div>
    )
  }
}