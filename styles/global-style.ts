import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    
  }

  body {
    font-family: "Pretendard", "sans-serif";
    color: #373740;
    font-size: 14px;
    font-weight: 400;
    max-width: 1920px;
    width: auto;
  }                     
`;

export default GlobalStyle;
