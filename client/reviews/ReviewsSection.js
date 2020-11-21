// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
const {styled} = window
const {React} = window
const {useEffect, useState} = React

import Modal from './modal/Modal';
import Ratings from './Ratings';
import ReviewsList from './ReviewsList';

export default (props) => {
  const [ratings, setRatings] = useState({})
  const [reviewsWithComments, setReviewsWithComments] = useState([])
  const [modalStatus, setModalStatus] = useState(false)

  useEffect( () => {
    (async () => {
      const urlParts = window.location.href.split('/')
      const homeId = urlParts[urlParts.length - 1] || '5'

      // console.log('wasdwasd')
      const {ratings, reviewsWithComments} = await fetch(`/api/homes/${homeId}/reviews`).then((res) => res.json());
      console.log(ratings, reviewsWithComments)
      setRatings(ratings);
      setReviewsWithComments(reviewsWithComments)
      console.log(ratings, reviewsWithComments)
    })();
  }, []);

  return (
    <SectionContainer>
      <Ratings ratings={ratings} totalReviews={reviewsWithComments.length}/>
      <ReviewsList reviews={reviewsWithComments.slice(0, 6)}/>

      <div>
        <OpenModal onClick={() => setModalStatus(true)}>Show all {reviewsWithComments.length} reviews</OpenModal>
      </div>
      {modalStatus && (
        <Modal
          ratings={ratings}
          totalReviews={reviewsWithComments.length}
          setModalStatus={setModalStatus}
          reviews={reviewsWithComments}
        />
      )}
    </SectionContainer>
  );
};
const OpenModal = styled.a`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: auto;
  touch-action: manipulation;
  font-size: ${props => props.theme.mdFont};
  line-height: 20px;
  font-weight: ${props => props.theme.mdWeight};
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  padding: 13px 23px;
  transition: box-shadow 0.2s ease 0s;
  border-color: ${props => props.theme.gray};
  background: rgb(255, 255, 255);
  color: ${props => props.theme.gray};
  transition: box-shadow 0.2s ease 0s;
  &:hover {
    border-color: rgb(0, 0, 0) !important;
    background: rgb(247, 247, 247) !important;
    color: rgb(34, 34, 34) !important;
  }

`

const SectionContainer = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
`