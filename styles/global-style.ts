import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
`;

export default GlobalStyle;
