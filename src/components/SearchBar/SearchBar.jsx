import React from "react";
import * as S from "./SearchBarStyle"; // 스타일 컴포넌트 가져오기

function SearchBar() {
  return (
    <S.SearchBarContainer>

      <S.SearchInput type="text" placeholder="링크를 검색해 보세요." />
      
    </S.SearchBarContainer>
  );
}

export default SearchBar;
