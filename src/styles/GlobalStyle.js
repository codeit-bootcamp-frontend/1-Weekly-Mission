import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    width: 100%;
  }

  main {
    min-height: calc(100vh - 37.4rem)
  }

  a,
  button {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
