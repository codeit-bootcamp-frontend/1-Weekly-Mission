import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import searchImg from "src/assets/Search.svg";
import closeImg from "src/assets/close.svg";
import { CloseImg, ContainerSearch, SearchImg, SerachInput } from "src/components/Main/SearchBar.styled";

function SearchBar() {
  const [value, setValue] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const [, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ folderId: value });
  };

  const handleClick = () => {
    setValue("");
    input.current?.focus();
  };

  return (
    <ContainerSearch>
      <form onSubmit={handleSubmit}>
        <SerachInput ref={input} name="folderId" placeholder="링크를 검색해보세요." value={value} onChange={handleChange} />
      </form>
      <SearchImg src={searchImg} alt="검색창 표시 이미지" />
      <CloseImg tabIndex={0} src={closeImg} alt="검색어를 지웁니다." onClick={handleClick} />
    </ContainerSearch>
  );
}

export default SearchBar;
