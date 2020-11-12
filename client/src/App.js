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
  smFont: 12,
  mdFont: 16,
  lgFont: 24
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