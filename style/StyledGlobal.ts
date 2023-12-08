// user agent stylesheet 초기화
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --primary: #6d6afe;
    --red: #ff5b56;
    --black: #111322;
    --white: #ffffff;

    --gray100: #373740;
    --gray60: #9fa6b2;
    --gray20: #ccd5e3;
    --gray10: #e7effb;
    --gray-light: #f5f5f5;

    --background: #f0f6ff;

    --text-gray: #676767;
    --text-content-gray: #666666;
    --text-content-black: #333333;

    --z-index-popover: 50;
    --z-index-nav: 100;
    --z-index-fab: 100;
    --z-index-modal: 1000;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard";
    word-break: keep-all;
  }

  html,
  body {
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    border: none;
    padding: none;
  }
  input:focus {
    outline: none;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  button {
    border: none;
    padding: unset;
    background-color: unset;
    cursor: pointer;
  }
`;
