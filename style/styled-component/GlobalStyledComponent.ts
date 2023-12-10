import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

*{
  font-family:'Pretendard';
  margin:0;
  box-sizing:border-box;
}
  html {
  	background-color: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;
