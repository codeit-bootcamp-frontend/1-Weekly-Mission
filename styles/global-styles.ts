import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    font-size: 62.5%;
    font-family: Pretendard;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Pretendard;
  }

  button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  }

  :root {
  --Primary: #6d6afe;
  --Red: #ff5b56;
  --Black: #111322;
  --White: #fff;

  --base-Gray1: 216, 100%, 97%;
  --Gray1: hsl(var(--base-Gray1));
  --Gray1-80: hsla(var(--base-Gray1), 80%);

  --Gray2: #e7effb;
  --Gray3: #ccd5e3;
  --Gray4: #9fa6b2;
  --Gray5: #3e3e43;
  }

  a {
    text-decoration: none;
    color: var(--White);
  }
`;
