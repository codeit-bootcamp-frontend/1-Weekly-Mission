import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import closeButton from "@/src/image/close_input.svg";
import search from "@/src/image/search.svg";
import Image from "next/image";

interface SearchBarProps {
  onSearch: (term: string) => void;
  searchTerm: string;
}

const SearchBar = ({ onSearch, searchTerm }: SearchBarProps) => {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
    setShowResults(searchTerm !== "");
  };

  const handleCloseResults = () => {
    onSearch("");
    setShowResults(false);
  };

  return (
    <Wrapper>
      <Input id="search" name="search" placeholder="링크를 검색해 보세요." value={searchTerm} onChange={handleSearch} />
      {showResults && (
        <Result>
          <span>{searchTerm}</span>으로 검색한 결과입니다.
          <CloseButton onClick={handleCloseResults}>
            <Image src={closeButton} alt="Close" />
          </CloseButton>
        </Result>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Input = styled.input`
  width: 106rem;
  padding: 1.5rem 1.6rem 1.5rem 4.2rem;
  position: relative; /* 추가: 상대적인 위치 지정 */

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  border: none;
  border-radius: 1rem;

  background: var(--grayLight);
  background-image: url(${search.src});
  background-repeat: no-repeat;
  background-size: 1.6rem;
  background-position: 1.6rem center;

  color: var(--gray10);

  font-size: 1.6rem;
  line-height: 2.4rem; /* 150% */

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    width: 34rem;
    padding: 1.3rem 1.6rem 1.3rem 3.8rem;

    font-size: 1.4rem;
    line-height: normal;
  }
`;

const Result = styled.div`
  color: var(--gray20);

  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.02rem;

  > span {
    color: var(--gray10);
  }

  @media (max-width: 767px) and (min-width: 375px) {
    font-size: 2.4rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2.8rem;
  right: 1.6rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    top: 2.3rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export default SearchBar;
