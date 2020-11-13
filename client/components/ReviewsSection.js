import React, { useEffect } from 'react';
import styled from 'styled-components';
import Ratings from './Ratings';
import ReviewsList from './ReviewsList';
const SectionContainer = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
`

export default (props) => {
  useEffect( () => {
    (async () => {
      const dbres = await fetch('http://localhost:3000/api/reviews').then((res) => res.json());
      console.log(dbres);
    })();
  }, []);

  return (
    <SectionContainer>
      <Ratings/>
      <ReviewsList />
    </SectionContainer>
  );
};