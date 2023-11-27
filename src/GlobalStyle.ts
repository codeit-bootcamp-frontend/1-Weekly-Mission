import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    font-family: Pretendard, sans-serif;
    box-sizing: border-box;
    margin: 0;
  }

  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }
  
  body {
    font-family: Pretendard, sans-serif;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    word-break: keep-all;
    word-wrap: break;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  #root {
    height: 100%;
  }

`;

export default GlobalStyle;
