// Code MovieReviews Here
import React, { Component } from 'react'

const MovieReviews = (props) => {
  //Props stuff
  <div className="review-list">
    <h3>{props.review.display_title}</h3>
    <p className="review">{props.review.summary.short}</p>
  </div>
}