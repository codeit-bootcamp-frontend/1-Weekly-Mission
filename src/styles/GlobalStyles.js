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
`;

export default Globalstyle;