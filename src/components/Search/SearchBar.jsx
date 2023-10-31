import styled from 'styled-components';
import search_icon from '../../assets/svg/search.svg';

function SearchBar() {
  return (
    <>
      <SearchIcon src={search_icon} alt='검색 아이콘' />
      <SearchInputStyle
        type='search'
        placeholder='링크를 검색해 보세요.'
      />
    </>
  );
}

export default SearchBar;

const SearchIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const SearchInputStyle = styled.input`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #f5f5f5;
  border: 0;

  &:focus::placeholder {
    color: transparent;
  }
`
