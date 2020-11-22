// import React from 'react';
const {React} = window
const {styled} = global
const {createGlobalStyle, ThemeProvider} = styled;
import ReviewsSection from './reviews/ReviewsSection';


const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
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
        <AppContainer>
          <HorizontalRule />
          <ReviewsSection />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};