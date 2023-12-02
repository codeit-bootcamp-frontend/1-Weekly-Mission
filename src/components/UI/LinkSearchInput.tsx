import styled from "styled-components";
import { useRef } from "react";
import * as React from "react";

type LinkSearchInputProps = {
  searchKeyword: string;
  setSearchKeyword: (arg: string) => void;
};

function LinkSearchInput({ searchKeyword, setSearchKeyword }: LinkSearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchKeyword = formData.get("text") as string;
    setSearchKeyword(searchKeyword);
  }

  function handleClearSearch() {
    if (inputRef.current) {
      inputRef.current.value = "";
      setSearchKeyword("");
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput
        ref={inputRef}
        name="text"
        type="text"
        autoComplete="on"
        placeholder="링크를 검색해 보세요."
      ></SearchInput>
      {searchKeyword !== "" && (
        <Button src="/assets/search_bar_close_button.svg" onClick={handleClearSearch} alt="검색 취소 버튼" />
      )}
    </FormContainer>
  );
}

const FormContainer = styled.form`
  height: 5.4rem;
  width: 106rem;
  margin: 1.6rem 0 1.6rem;

  display: flex;
  position: relative;

  @media (max-width: 1124px) {
    width: 100%;
  }
`;

const Button = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  &:hover {
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.5rem 1.6rem;
  border-radius: 1rem;
  background: var(--grayLight);
  border: 0;
  -webkit-box-shadow: 0 0 0 1000px var(--grayLight) inset;
  box-shadow: 0 0 0 1000px var(--grayLight) inset; // 자동완성 시 생성되는 배경색 동일하게 지정

  ::-webkit-search-cancel-button {
    background-image: url("src/assets/search_bar_close_button.svg");
  }

  &:focus {
    border: 0.1rem solid var(--primary);
    outline: none;
  }

  @media (max-width: 779px) {
    padding: 1.3rem 1.6rem;
  }
`;

export default LinkSearchInput;
