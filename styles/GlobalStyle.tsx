import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --primary: #6d6afe;
  --red: #ff5b56;
  --black: #111322;
  --white: #ffffff;
  --gray37: #373740;
  --gray9F: #9fa6b2;
  --grayCC: #ccd5e3;
  --grayE7: #e7effb;
  --linkbrary-bg: #f0f6ff;
}
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
  }
  

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: Pretendard;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100vw;
  }

  body {
    min-height: calc(100vh - 37.4rem)
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  input {
    outline: none;
  }
`;

export default GlobalStyle;
