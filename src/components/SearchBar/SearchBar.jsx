import { useState } from "react";
import searchIcon from "images/search.svg";
import * as S from "./SearchBar.style";

function SearchBar() {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <S.SearchBarContainer>
      <form>
        <input value={value} onChange={handleValueChange} placeholder="링크를 검색해 보세요." />
        <img src={searchIcon} alt="검색 아이콘" />
      </form>
    </S.SearchBarContainer>
  );
}

export default SearchBar;
