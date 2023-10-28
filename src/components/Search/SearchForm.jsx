import styled from 'styled-components';
import SearchBar from './SearchBar';

function SearchForm() {
  return (
    <SearchFormStyle>
      <SearchBar />
    </SearchFormStyle>
  );
}

export default SearchForm;

const SearchFormStyle = styled.form`
  display: flex;
  width: 32.5rem;
  padding: 1.3rem 1.6rem;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  gap: 0.6rem;

  @media (min-width: 768px) {
    width: 70.4rem;
    padding: 1.5rem 1.6rem;
  }

  @media (min-width: 1024px) {
    width: 106rem;
  }
`;
