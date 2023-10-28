import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  * {
    font-family: Pretendard, 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    margin: 0;
  }

  html {
    height: 100%;
    min-width: 410px;
    font-size: 62.5%;
  }
  
  body {
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

export default GlobalStyle