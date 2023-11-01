import {ThemeProvider} from 'styled-components';
import display from '../../css/display.js'
import searchImg from "../../assets/Search.svg";
import * as S from './Search.style.js'

export function Search() {
  return (
    <ThemeProvider theme={display}>
      <S.Container>
        <img src={searchImg} alt="검색아이콘" />
        <input type="search" name="search" placeholder="링크를 검색해 보세요." />
      </S.Container>
    </ThemeProvider>
  );
}
