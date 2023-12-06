import reset from 'styled-reset'; 
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --purpleblue : #6D6AFE ;
    --blue : #1877F2;
    --skyblue : #6AE3FE ;

    --linkbrary-red : #FF5B56 ;
    --yellow : #FEE500;

    --gray-100 : #373740;
    --gray-60: #9FA6B2; 
    --gray-20: #ccd5e3;
    --gray-10: #e7effb;
    --gray-bg: #f0f6ff;

    --black: #111322;
    --whith: #fff;
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

export default GlobalStyle;