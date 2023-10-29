import { createGlobalStyle } from 'styled-components';


// 이게 필요할까요..? 뭔가 더 정리되었으면 좋겠어서 이렇게 했는데 그냥 body에 css 속성으로 넣는 게 더 간단할 것 같기도 해서요
/* export const COLORS = {
  primary: '#6d6afe',
  red: '#FF5B56',
  black: '#111322',
  white: '#ffffff',
  gray100: '#3E3E43',
  gray60: '#9FA6B2',
  gray20: '#CCD5E3',
  gray10: '#E7EFFB',
  gray0: '#F0F6FF',
  grayLight: '#F5F5F5',
  graBlueToSkyBlue: 'linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)',
  graBlueToPink: 'linear-gradient(91deg, #6D6AFE 17.28%, #FF9F9F 74.98%)',
  graPinkToSkyBlue: 'linear-gradient(96deg, #FE8A8A, #A4CEFF)',
  graSkyBlueToYellow: 'linear-gradient(277deg, #6FBAFF, #FFD88B)',
  graBlueToDarkGreen: 'linear-gradient(99deg, #6D7CCD 19.76%, rgba(82, 136, 133, 0.22) 52.69%)',
  graHotpinkToSkyBlue: 'linear-gradient(271deg, #FE578F, #68E8F9)'
}; */

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }

  body {
    --primary: #6d6afe;
    --red: #FF5B56;
    --black: #111322;
    --white: #ffffff;
    --gray100: #3E3E43;
    --gray60: #9FA6B2;
    --gray20: #CCD5E3;
    --gray10: #E7EFFB;
    --gray0: #F0F6FF;
    --grayLight: #F5F5F5;
    --graBlueToSkyBlue: linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%);
    --graBlueToPink: linear-gradient(91deg, #6D6AFE 17.28%, #FF9F9F 74.98%);
    --graPinkToSkyBlue: linear-gradient(96deg, #FE8A8A, #A4CEFF);
    --graSkyBlueToYellow: linear-gradient(277deg, #6FBAFF, #FFD88B);
    --graBlueToDarkGreen: linear-gradient(99deg, #6D7CCD 19.76%, rgba(82, 136, 133, 0.22) 52.69%);
    --graHotpinkToSkyBlue: linear-gradient(271deg, #FE578F, #68E8F9);

    font-family: Pretendard;
    color: var(--black);
    font-family: Pretendard;
    font-style: normal;
    margin: 0;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  p {
    margin: 0
  }

  a {
  text-decoration: none;
  color: var(--black);
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`

export default GlobalStyle;
