import { useState } from "react";
import searchIcon from "images/search.svg";
import * as S from "./SearchBar.style";

function SearchBar() {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <S.Container>
      <S.Form>
        <S.Input value={value} onChange={handleValueChange} placeholder="링크를 검색해 보세요." />
        <S.Img src={searchIcon} alt="검색 아이콘" />
      </S.Form>
    </S.Container>
  );
}

export default SearchBar;
