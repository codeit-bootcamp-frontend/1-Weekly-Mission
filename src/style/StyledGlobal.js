// user agent stylesheet 초기화
import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  :root {
    --primary: #6d6afe;
    --red: #ff5b56;
    --black: #111322;
    --white: #ffffff;

    --gray100: #373740;
    --gray60: #9fa6b2;
    --gray20: #ccd5e3;
    --gray10: #e7effb;

    --background: #f0f6ff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: "Pretendard";
    word-break: keep-all;
  }

  html,
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    padding: unset;
    background-color: unset;
    cursor: pointer;
  }
`;
