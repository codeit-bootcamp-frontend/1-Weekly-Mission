import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 초기화 코드 */
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard";
  }

  html,
  body {
    font-size: 62.5%;
    white-space: nowrap;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  /* 색상 코드 */
  :root {
    --primary: #6d6afe;
    --linkbrary-red: #ff5b56;
    --linkbrary-black: #111322;
    --linkbrary-white: #ffffff;


    --grayLight: #f5f5f5; 
    --gray10: #3e3e43;
    --gray20: #9fa6b2;
    --gray30: #ccd5e3;
    --gray40: #e7effb;

    --bg: #f0f6ff;

    --graBlueToSkyBlue: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  }
`;

export default GlobalStyle;
