import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { fonts } from './fonts/pretendard';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
`;

export default GlobalStyle;
