import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'Pretendard';
	font-weight: 900;
	font-display: swap;
	src: local('Pretendard Black'), url(./woff2-subset/Pretendard-Black.subset.woff2) format('woff2'), url(./woff-subset/Pretendard-Black.subset.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 800;
	font-display: swap;
	src: local('Pretendard ExtraBold'), url(./woff2-subset/Pretendard-ExtraBold.subset.woff2) format('woff2'), url(./woff-subset/Pretendard-ExtraBold.subset.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 700;
	font-display: swap;
	src: local('Pretendard Bold'), url(./woff2-subset/Pretendard-Bold.subset.woff2) format('woff2'), url(./woff-subset/Pretendard-Bold.subset.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 600;
	font-display: swap;
	src: local('Pretendard SemiBold'), url(./woff2-subset/Pretendard-SemiBold.subset.woff2) format('woff2'), url(./woff-subset/Pretendard-SemiBold.subset.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 500;
	font-display: swap;
	src: local('Pretendard Medium'), url(./woff2-subset/Pretendard-Medium.subset.woff2) format('woff2'), url(./woff-subset/Pretendard-Medium.subset.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 400;
	font-display: swap;
	src: local('Pretendard Regular'), url(./woff2-subset/Pretendard-Regular.subset.woff2) format('woff2'), url(./woff-subset/Pretendard-Regular.subset.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 300;
	font-display: swap;
	src: local('Pretendard Light'), url(./woff2-subset/Pretendard-Light.subset.woff2) format('woff2'), url(./woff-subset/Pretendard-Light.subset.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 200;
	font-display: swap;
	src: local('Pretendard ExtraLight'), url(./woff2-subset/Pretendard-ExtraLight.subset.woff2) format('woff2'), url(./woff-subset/Pretendard-ExtraLight.subset.woff) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 100;
	font-display: swap;
	src: local('Pretendard Thin'), url(./woff2-subset/Pretendard-Thin.subset.woff2) format('woff2'), url(./woff-subset/Pretendard-Thin.subset.woff) format('woff');
}

:root {
  --primary: #6D6AFE;
  --red:#FF5B56;
  --black: #11322;
  --white: #FFFFFF;
  --gray100: #373740;
  --gray60: #9FA6B2;
  --gray20: #CCD5E3;
  --gray10: #E7EFFB;
  --bg: #F0F6FF;
  --gray-light: #F5F5F5;
  --gra-purpleblue-to-skyblue: linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%);
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-family: 'Pretendard', sans-serif;
	font-size: 100%;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

*{
	box-sizing:border-box;
	font-size: 1rem;
	line-height: normal;
	text-decoration: none;
	color: var(--black);
	}

body {
	background-color: var(--white);
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
cursor: pointer;
}

button{
	overflow:visible;
	padding:0;
	border:none;
	border-radius:0;
	background: inherit;
	box-shadow:none;
	cursor:pointer;
	font-family: 'Pretendard';
}
`;

export default GlobalStyles;
