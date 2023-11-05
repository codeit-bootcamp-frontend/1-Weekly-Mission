import { useState } from "react";
import * as S from "./FolderSearchBar.style";
import Search from "../../images/Search.png";

const FolderSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (e) => setSearchValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("검색:", searchValue);
    setSearchValue("");
  };

  return (
    <S.SearchBar>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchImageInput type="image" src={Search} alt="검색" />
        <S.SearchInput
          type="text"
          name="search"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="링크를 검색해 보세요."
        />
      </S.SearchForm>
    </S.SearchBar>
  );
};

export default FolderSearchBar;
