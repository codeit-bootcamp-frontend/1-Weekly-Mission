import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }

  html, body {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
  }

  button,
  img,
  a {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;
