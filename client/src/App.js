import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ReviewsSection from './ReviewsSection';



const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10
  }
`;
const theme = {
  xsFont: '12xpx', //rating #
  smFont: '14px', //date
  mdFont: '16px', // everything but date+rating #, show more

  smWeight: 400, //date and content, rating name
  mdWeight: 600, //name, read more, rating #, show more

  darkGray: '#000000', //read more
  gray: '#222', //name, content, rating name, rating #, show more
  lightGray: '#717171' //date
};

export default () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <ReviewsSection />
      </ThemeProvider>
    </>
  );
};