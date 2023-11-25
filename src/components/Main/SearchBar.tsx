import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import searchImg from "src/assets/Search.svg";
import { ContainerSearch, SearchImg, SerachInput } from "src/components/Main/SearchBar.styled";

function SearchBar() {
  const [value, setValue] = useState("");
  const [, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ folderId: value });
  };
  return (
    <ContainerSearch>
      <form onSubmit={handleSubmit}>
        <SerachInput name="folderId" placeholder="링크를 검색해보세요." value={value} onChange={handleChange} />
      </form>
      <SearchImg src={searchImg} alt="검색창 표시 이미지"></SearchImg>
    </ContainerSearch>
  );
}

export default SearchBar;
