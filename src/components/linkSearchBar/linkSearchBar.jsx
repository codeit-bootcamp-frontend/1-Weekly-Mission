import * as S from "./linkSearchBar.style.js";
import searchIcon from "assets/icons/search.svg";

export default function LinkSearchBar() {
  return (
    <S.LinkSearchForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <S.LinkSearchFieldset>
        <img src={searchIcon} alt="검색 아이콘" />
        <label className="a11y" htmlFor="searchInput"></label>
        <S.LinkSearchInput
          id="searchInput"
          type="text"
          placeholder="링크를 검색해 보세요."
          aria-label="링크 검색어를 입력하는 입력 요소입니다."
          onChange={(e) => {}}
        />
      </S.LinkSearchFieldset>
    </S.LinkSearchForm>
  );
}
