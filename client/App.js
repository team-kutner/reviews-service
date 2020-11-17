import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './header/Header';
import ReviewsSection from './reviews/ReviewsSection';
import OurFont from './assets/images/Montserrat-Regular.ttf'


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'OurFont';
    src: url(${OurFont});
  }
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10;
    font-family: 'OurFont';
  }

`;


const theme = {
  xsFont: '12px', //rating #
  smFont: '14px', //date, rating name in modal
  mdFont: '16px', // everything but date+rating #, show more
  xlFont: '22px', //review count

  smWeight: 400, //date and content, rating name
  mdWeight: 600, //name, read more, rating #, show more

  darkGray: '#000000', //read more
  gray: '#222', //name, content, rating name, rating #, show more
  lightGray: '#717171', //date,
  font: 'OurFont'
};

const AppContainer = styled.div`
  width: 1128px;
  height: 754px;
  margin-left: auto;
  margin-right: auto;
`
const HorizontalRule = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(221, 221, 221);
`

export default () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <AppContainer>
          <HorizontalRule />
          <ReviewsSection />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};