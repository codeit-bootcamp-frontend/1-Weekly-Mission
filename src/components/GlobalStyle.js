import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
:root {
	--linkbrary-primary-color: #6d6afe;
	--linkbrary-red: #ff5b56;
	--the-julge-black: #111322;
	--linkbrary-zircon: #f0f6ff;
	--linkbrary-white: #ffffff;
	--linkbrary-gray-10: #e7effb;
	--linkbrary-gray-20: #ccd5e3;
	--linkbrary-gray-60: #9fa6b2;
	--linkbrary-gray-100: #373740;
	--button-grey-light: #f5f5f5;
	--button-bg-purpleblue-to-skyblue: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
}

*{
	box-sizing: border-box;
}

html{
	font-size: 62.5%;
	-webkit-text-size-adjust: 100%;
}

body {
	min-height: 100%;
	min-height: 100vh;
	min-height: -webkit-fill-available;
	margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
	text-decoration: none;
}

input:-webkit-autofill {
	-webkit-box-shadow: 0 0 0 62.5rem var(--linkbrary-white) inset;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
  line-height: 1.15;
  margin: 0;
}
button{
	border: none;
  padding: 0;
  background: none;
	outline: none;
}

li{
	list-style: none;
}


`;

export default GlobalStyle;
