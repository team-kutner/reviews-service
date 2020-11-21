// import React from 'react';
const {React} = window

// import styled from 'styled-components';
const {styled} = window
import ReviewsListItem from './ReviewsListItem';



const ReviewsList = (props) => {
  const {reviews, modal=false, searchTerm = ''} = props
  return (
    <Container modal={modal}>
      {reviews.filter((review) => review.content.toLowerCase().includes(searchTerm.toLowerCase())).map((review) => <ReviewsListItem review={review} key={review.id} modal={modal}/>)}
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