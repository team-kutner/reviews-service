import React from 'react';
import styled from 'styled-components';
import ReviewsListItem from './ReviewsListItem';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
`


const ReviewsList = (props) => {
  const {reviews} = props
  return (
    <Container>
      {reviews.map(({review}) => <ReviewsListItem review={review}/>)}
      <ReviewsListItem/>
      <ReviewsListItem/>
      <ReviewsListItem/>
      <ReviewsListItem/>
      <ReviewsListItem/>
      <ReviewsListItem/>
    </Container>
  );
}

export default ReviewsList;
