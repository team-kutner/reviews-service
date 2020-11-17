import React from 'react';
import styled from 'styled-components';
import ReviewsListItem from './ReviewsListItem';



const ReviewsList = (props) => {
  const {reviews, modal=false} = props
  return (
    <Container modal={modal}>
      {reviews.map((review) => <ReviewsListItem review={review} key={review.id} modal={modal}/>)}
    </Container>
  );
}

export default ReviewsList;

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: ${props => !props.modal ? 'row' : 'column'};
  flex-wrap: wrap;
`