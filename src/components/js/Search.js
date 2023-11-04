import styled from "styled-components";
import searchIcon from "../../Assets/Search.svg";

function Search() {
  return (
    <>
      <SearchForm>
        <SearchIcon src={searchIcon} alt={searchIcon} />
        <SearchInput placeholder="링크를 검색해보세요"></SearchInput>
      </SearchForm>
    </>
  );
}

export default Search;

const SearchForm = styled.form`
  width: 1060px;
  height: 54px;
  margin: 40px auto;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 1199px) and (min-width: 768px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 30px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #666;

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;
