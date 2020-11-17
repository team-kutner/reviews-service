import React, { useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import Ratings from '../Ratings';
import ReviewsList from '../ReviewsList';

const Modal = (props) => {
  const {ratings, totalReviews, setModalStatus, reviews} = props


  useEffect(() => {
     document.body.style.overflow = 'hidden';
     return ()=> document.body.style.overflow = 'unset';
  }, []);

  return (
    <ModalBG onClick={() => setModalStatus(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
          <StickyRatingsContainer>
            <HeadContainer>
              <CloseModal src='https://i.imgur.com/2lWY5UV.png'/>
            </HeadContainer>
            <Ratings ratings={ratings} totalReviews={totalReviews} modal={true}/>
          </StickyRatingsContainer>
        <ContentFlex>

          <ReviewsSearchContainer>
            {/* <SearchContainer>

            </SearchContainer> */}

            <ReviewsList reviews={reviews} modal={true}/>
          </ReviewsSearchContainer>
        </ContentFlex>
      </ModalContainer>
    </ModalBG>
  );
}


const StickyRatingsContainer = styled.div`
  position: fixed;
  width: 17%;
  margin-left: 24px;
`
const ReviewsSearchContainer = styled.div`
  width: 60%;
  margin-left: 42%;

`

const SearchContainer = styled.div`
  margin-bottom: 36px;
  display: flex;
  width: 100%;
  align-items: center;
  border: none !important;
  color: rgb(34, 34, 34) !important;
  background-color: rgb(247, 247, 247) !important;
  align-items: center !important;
  padding: 12px 12px 12px 16px !important;
  border-radius: 100px !important;
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset !important;
`
const HeadContainer = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
`
const CloseModal = styled.img`
  /* margin-left: 24px; */
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
  overflow: auto;
`
export default Modal;
