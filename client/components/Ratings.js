import React from 'react';
import styled, {css} from 'styled-components'
import calcOverallRating from '../utils/calcOverallRating';
import RatingsItem from './RatingsItem';

export default (props) => {
  const {ratings, totalReviews, modal=false } = props;


  return (
    <div>
      <RatingCountContainer>
        <StarImage src={'https://i.imgur.com/U9jEbtL.png'}/>
        <TotalReviewsText>{calcOverallRating(ratings)} ({totalReviews} reviews)</TotalReviewsText>
      </RatingCountContainer>

      <RatingsFlexContainer modal={modal}>
        {Object.entries(ratings).map(([ratingName, ratingNumber]) => (
          <RatingsItem
            key={ratingName}
            ratingName={ratingName}
            ratingNumber={ratingNumber}
          />
        ))}

      </RatingsFlexContainer>
    </div>
  );
};
const StarImage = styled.img`
  margin-right: 8px;
`

const TotalReviewsText = styled.span`
  line-height: 26px;
  color: ${props => props.theme.gray};
  font-weight: ${props => props.theme.mdWeight};
  font-size: ${props => props.theme.xlFont};
`


const RatingCountContainer = styled.div`
  padding-bottom: 32px;
`
const RatingsFlexContainer = styled.div`
  display: flex;
  align-items: stretch;

  flex-direction: ${props => props.modal ? 'column' : 'row'};
  ${props => props.modal && css`
    width: 80%
  `}
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 24px;
`