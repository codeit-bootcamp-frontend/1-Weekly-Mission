import styled from "styled-components";
import search from "../../image/search.svg";

const SearchBar = () => {
  return (
    <form>
      <Input
        id="search"
        name="search"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
};

const Input = styled.input`
  display: flex;
  width: 106rem;
  padding: 1.5rem 1.6rem 1.5rem 4.2rem;
  justify-content: space-between;
  align-items: flex-start;
  border: none;
  border-radius: 1rem;
  background: var(--grayLight);
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: 1.6rem;
  background-position: 1.6rem center;

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    width: 34rem;
  }
`;

export default SearchBar;
