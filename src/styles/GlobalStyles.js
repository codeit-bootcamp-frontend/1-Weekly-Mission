import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        font-family: "Pretendard";
    }
    
    html,
    body {
        font-size: 62.5%;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }


    :root {
        --linkbrary-primary-color: #6d6afe;
        --linkbrary-red: #ff5b56;
        --the-julge-black: #111322;
        --linkbrary-white: #ffffff;
        --linkbrary-gray-100: #373740;
        --linkbrary-gray-60: #9fa6b2;
        --linkbrary-gray-20: #ccd5e3;
        --linkbrary-gray-10: #e7effb;
        --linkbrary-bg: #f0f6ff;
        --linkbrary-footer-text: #cfcfcf;
        --linkbrary-footer-copyright: #676767;
        --linkbrary-description: #6b6b6b;
        --linkbrary-title-1-gradient: linear-gradient(
          117deg,
          #fe8a8a 2.29%,
          #a4ceff 100%
        );
        --linkbrary-title-2-gradient: linear-gradient(
          304deg,
          #6fbaff 0%,
          #ffd88b 100%
        );
        --linkbrary-title-3-gradient: linear-gradient(
          133deg,
          #2945c7 0%,
          #dbe1f8 100%
        );
        --linkbrary-title-4-gradient: linear-gradient(
          310deg,
          #fe578f 0%,
          #68e8f9 100%
        );
        --linkbrary-slogan-gradient: linear-gradient(
          119deg,
          var(--linkbrary-primary-color) 0%,
          #ff9f9f 100%
        );
        --linkbrary-button-gradient: linear-gradient(
          135deg,
          var(--linkbrary-primary-color) 0%,
          #6ae3fe 100%
        );
        --linkbrary-button-text: #f5f5f5;
      }
      
`;

export default GlobalStyle;
