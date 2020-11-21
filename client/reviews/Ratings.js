// import React from 'react';
const {React} = window;
// import styled, {css} from 'styled-components'
import calcOverallRating from '../utils/calcOverallRating';
import RatingsItem from './RatingsItem';
const {styled} = window
const {css} = styled

export default (props) => {
  const {ratings, totalReviews, modal=false } = props;


  return (
    <Container modal={modal}>
      <RatingCountContainer>
        <StarImage src={'https://i.imgur.com/U9jEbtL.png'} modal={modal}/>
        <TotalReviewsText modal={modal}>{calcOverallRating(ratings)} ({totalReviews} reviews)</TotalReviewsText>
      </RatingCountContainer>

      <RatingsFlexContainer modal={modal}>
        {Object.entries(ratings).map(([ratingName, ratingNumber]) => {


          return (
            <RatingsItem
            key={ratingName}
            ratingName={ratingName}
            ratingNumber={ratingNumber}
            modal={modal}
          />
          )
        })}

      </RatingsFlexContainer>
    </Container>
  );
};

const Container = styled.div`
  /* ${props => props.modal && css`
    width: 33%;
  `} */
`
const StarImage = styled.img`
  margin-right: 8px;
  ${props => props.modal && css`
    width: 25px;
  `}
`

const TotalReviewsText = styled.span`
  line-height: ${props => !props.modal ? '26px' : '36px'};
  color: ${props => props.theme.gray};
  font-weight: ${props => !props.modal ? props.theme.mdWeight : '800'};
  font-size: ${props => !props.modal ? props.theme.xlFont : '32px'};
`


const RatingCountContainer = styled.div`
  padding-bottom: 32px;

`
const RatingsFlexContainer = styled.div`
  display: flex;
  align-items: stretch;

  flex-direction: ${props => props.modal ? 'column' : 'row'};



  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 24px;
`