// import React, { useEffect, useState } from 'react';
const {React} = window
const {useEffect, useState} = React
// import styled, {keyframes} from 'styled-components';
const {styled} = window
const {keyframes} = styled

import Ratings from '../Ratings';
import ReviewsList from '../ReviewsList';
import smallQicon from '../../assets/images/Qsearch.svg'
import bigQicon from '../../assets/images/bigQsearch.svg'
import XclearSearch from '../../assets/images/XclearSearch.svg'
import Xclose from '../../assets/images/Xclose.svg'

const Modal = (props) => {
  const {ratings, totalReviews, setModalStatus, reviews} = props
  console.log(reviews, 'from modal')
  const [searchFocus, setSearchFocus] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
     document.body.style.overflow = 'hidden';
     return ()=> document.body.style.overflow = 'unset';
  }, []);

  return (
    <ModalBG onClick={() => setModalStatus(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
          <StickyRatingsContainer>
            <HeadContainer>
              <HoverHelper onClick={() => setModalStatus(false)}>
                <CloseModal src={Xclose}/>
              </HoverHelper>
            </HeadContainer>
            <Ratings ratings={ratings} totalReviews={totalReviews} modal={true}/>
          </StickyRatingsContainer>
        <ContentFlex>

          <ReviewsSearchContainer>
            <SearchContainer searchFocus={searchFocus}>
              <SearchIcon searchFocus={searchFocus}/>

              <SearchInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search reviews"
                onFocus={(e) => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
              {!!searchTerm && (
              <ClearSearchBtn onClick={() => setSearchTerm('')}>
                <ClearSearchIcon src={XclearSearch}/>
              </ClearSearchBtn>
              )}
            </SearchContainer>

            <ReviewsList reviews={reviews} modal={true} searchTerm={searchTerm}/>
          </ReviewsSearchContainer>
        </ContentFlex>
      </ModalContainer>
    </ModalBG>
  );
}

const HoverHelper = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  &:hover {
    background-color: rgb(247, 247, 247);
    cursor: pointer;
  }
`
const ClearSearchIcon = styled.img`
  height: 12px;
  width: 12px;
`

const ClearSearchBtn = styled.button`
  border: none !important;
  background-color: rgb(221, 221, 221) !important;
  color: rgb(113, 113, 113) !important;
  border-radius: 50% !important;
  padding: 4px !important;
  display: flex !important;
  justify-content: center !important;
  outline: none !important;
  &:hover {
    background-color: rgb(176, 176, 176) !important;
    cursor: pointer;
  }
`
const SearchIcon = styled.img`
  height:16px;
  width: 16px;
  margin-right: 8px;
  content: url(${props => !props.searchFocus ? smallQicon : bigQicon});
  /* filter: invert(1); */
`
const SearchInput = styled.input`
  width: 100% !important;
  border: none !important;
  outline: none !important;
  margin: 0px 8px 0px 0px !important;
  min-height: 1px !important;
  color: rgb(34, 34, 34) !important;
  background-color: transparent !important;
  font-family: inherit !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  appearance: none !important;
  flex: 1 1 0% !important;
  padding: 0px !important;
  text-overflow: ellipsis !important;
`

const StickyRatingsContainer = styled.div`
  position: fixed;
  /* width: 17%; */
  margin-left: 24px;
`
const ReviewsSearchContainer = styled.div`
  width: 60%;
  /* max-width: 560.88px; */
  /* margin-right: 20px; */
  margin-left: 42%;

`



const SearchContainer = styled.div`
  margin-bottom: 36px;
  display: flex;
  width: 100%;
  color: rgb(34, 34, 34) !important;
  background-color: rgb(247, 247, 247) !important;
  align-items: center !important;
  padding: 12px 12px 12px 16px !important;
  border-radius: 100px !important;
  box-shadow: ${props => !props.searchFocus ? 'rgb(176, 176, 176) 0px 0px 0px 1px inset !important' : 'rgb(34, 34, 34) 0px 0px 0px 2px inset !important'};
`
const HeadContainer = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
`
const CloseModal = styled.img`
  /* margin-left: 24px; */
  width: 16px;
  height: 16px;
`
const ContentFlex = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
  /* overflow: auto; */
`

const OpacityFrames = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}
`
const TransitionFrames = keyframes`
  from {
    opacity: 0.6;
    transform: translate(0px, 100%);
  }
  to {
    opacity: 1;
    transform: none;
  }
`


const ModalBG = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: ${OpacityFrames};
`

const ModalContainer = styled.div`
  max-width: 1032px;
  width: 100%;
  border-radius: 12px;
  background-color: rgba(255,255,255, 1);
  height: 867px;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: ${TransitionFrames};
  overflow-y: scroll;
`
export default Modal;
