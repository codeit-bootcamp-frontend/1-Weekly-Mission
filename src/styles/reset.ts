import { css } from "styled-components";

export const reset = css`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard";
    word-break: keep-all;
  }

  html,
  body {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
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

  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;
