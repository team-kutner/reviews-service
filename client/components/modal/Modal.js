import React from 'react';
import styled, {keyframes} from 'styled-components';
import Ratings from '../Ratings';

const Modal = (props) => {
  const {ratings, totalReviews, setModalStatus} = props

  return (
    <ModalBG onClick={() => setModalStatus(false)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <HeadContainer>
          <CloseModal src='https://i.imgur.com/2lWY5UV.png'/>
        </HeadContainer>
        <ContentFlex>
          <Ratings ratings={ratings} totalReviews={totalReviews} modal={true}/>
        </ContentFlex>
      </ModalContainer>
    </ModalBG>
  );
}

const HeadContainer = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
`
const CloseModal = styled.img`
  margin-left: 24px;
`
const ContentFlex = styled.div`
  padding-left: 24px;
  padding-right: 24px;
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
  height: 500px;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-name: ${TransitionFrames};
`
export default Modal;
