import { createGlobalStyle } from 'styled-components';

export const StyleGlobal = createGlobalStyle`
  :root {
    --purpleblue : #6D6AFE ;
    --skyblue : #6AE3FE ;
    --linkbrary-red : #FF5B56 ;
    --yellow : #FEE500;
    --blue : #1877F2;
  }

  * {
  box-sizing: border-box;
  margin: 0;
  font-size: 62.5%;
  }

  body {
    font-family: "Pretendard", "sans-serif";
    color: #373740;
    font-size: 1.4rem;
    font-weight: 400;
    max-width: 192rem;
    width: auto;
  }
`