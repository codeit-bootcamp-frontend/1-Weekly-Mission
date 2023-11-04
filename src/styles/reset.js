// Boilerplate Source: https://github.com/magnetikonline/sass-boilerplate/blob/main/resetbase.scss
import { css } from 'styled-components';

export const reset = css`
  * {
    box-sizing: border-box;
  }

  a,
  abbr,
  body,
  button,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  iframe,
  img,
  label,
  legend,
  li,
  ol,
  p,
  td,
  th,
  ul {
    border: 0;
    font-weight: normal;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    vertical-align: baseline;
    word-break: break-all;
  }

  a,
  abbr {
    font-weight: inherit;
  }

  input,
  select,
  textarea {
    margin: 0;
  }

  // -- base --
  body,
  button,
  input,
  select,
  td,
  textarea,
  th {
    color: #000;
    font-family: Pretendard, sans-serif;
    word-break: keep-all;
  }

  body,
  button {
    background: #fff;
    line-height: 1;
  }

  html {
    font-size: 62.5%;
  }

  a,
  button {
    cursor: pointer;
  }
`;
