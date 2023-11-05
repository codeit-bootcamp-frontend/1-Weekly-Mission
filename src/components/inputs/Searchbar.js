import * as S from "./SearchbarStyle";
import searchIcon from "assets/Search.svg";

export default function Searchbar() {
  return (
    <S.Search>
      <S.Icon src={searchIcon} alt="search" />
      <S.Input type="text" placeholder="링크를 검색해 보세요." />
    </S.Search>
  );
}
