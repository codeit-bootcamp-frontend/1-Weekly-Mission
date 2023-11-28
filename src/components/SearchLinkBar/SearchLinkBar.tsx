import * as S from "./SearchLinkBar.style";
import searchIcon from "assets/images/search.svg";

function SearchLink() {
  return (
    <S.SearchLinkContainer>
      <S.SearchLinkIcon src={searchIcon} alt="링크 검색하기" />
      <S.SearchLinkInput placeholder="링크를 검색해 보세요" />
    </S.SearchLinkContainer>
  );
}

export default SearchLink;