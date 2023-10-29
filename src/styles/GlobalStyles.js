//GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';  

const Globalstyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Pretendard';
    // 폰트 설정하기 
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    font-size: 16px;
    vertical-align: baseline;
  }
  
  ol, ul{
    list-style: none;
}
  a {
    text-decoration: none;
    cursor: pointer;
  }
  button {
    border: none;
    cursor: pointer;
  }

  :root {
    --color-primary: #6D6AFE;
    --color-red: #FF5B56;
    --color-black: #111322;
    --color-white: #FFFFFF;
    --color-gray-01: #3E3E43;
    --color-gray-02: #9FA6B2;
    --color-gray-03: #CCD5E3;
    --color-gray-04: #E7EFFB;
    --color-gray-05: #F0F6FF;
    --color-background: linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%);
  }
`;

export default Globalstyle;