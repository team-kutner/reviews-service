import React from 'react';
import styled from 'styled-components';
import ReviewsListItem from './ReviewsListItem';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
`


const ReviewsList = () => {
  return (
    <Container>
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
