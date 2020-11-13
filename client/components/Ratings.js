import React from 'react';
import styled from 'styled-components'
import RatingsItem from './RatingsItem';

const RatingCountContainer = styled.div`
  padding-bottom: 32px;
`
const RatingsFlexContainer = styled.div`
  display: flex;
  align-items: stretch;

  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 24px;
`
export default () => {
  return (
    <div>
      <RatingCountContainer>
        <span></span>
        (4 reviews)
      </RatingCountContainer>

      <RatingsFlexContainer>
        <RatingsItem/>
        <RatingsItem/>
        <RatingsItem/>
        <RatingsItem/>
        <RatingsItem/>
        <RatingsItem/>
      </RatingsFlexContainer>
    </div>
  );
};

