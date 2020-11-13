import React from 'react';
import styled from 'styled-components';


const RatingsItem = () => {
  return (
    <ItemContainer>
      <ItemContainerParts>
        <RatingName>Communication</RatingName>
        <BarRatingNumContainer>
          <BarFullPercent>
            <BarUsedPercent></BarUsedPercent>
          </BarFullPercent>

          <RatingNumber>2.5</RatingNumber>
        </BarRatingNumContainer>
      </ItemContainerParts>
    </ItemContainer>
  );
}

export default RatingsItem;

const ItemContainer = styled.div`
  width: 41.66%;
  margin-right: 8.33%;
  /* padding-right: 8px; */
  /* padding-left: 8px; */
  margin-bottom: 16px;
  position: relative;
`
const RatingName = styled.div`
  color: ${props => props.theme.gray};
  font-weight: ${props => props.theme.smWeight};
  font-size: ${props => props.theme.mdFont};
  line-height: 20px
`

const ItemContainerParts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const BarRatingNumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left:12px;
  width: 50%;
`
const BarFullPercent = styled.div`
  position: relative;
  height: 4px;
  width: 100%;
  margin-right: 4px;
  background: rgb(221, 221, 221);
  border-radius: 2px;
`
const BarUsedPercent = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background: ${props => props.theme.gray};
  border-radius: 2px;
  width: 64%;
`


const RatingNumber = styled.span`
  font-size: ${props => props.theme.xsFont};
  font-weight: ${props => props.theme.mdWeight};
  line-height: 12px;
  color: ${props => props.theme.gray};
  margin-left: 6px;
`