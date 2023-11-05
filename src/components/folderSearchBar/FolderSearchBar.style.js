import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    grid-template-columns: minmax(auto, 32.5rem);
    gap: 2rem;
    position: relative;
    grid-area: searchBar;
  }
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  flex: 0 1 106rem;
`;

export const SearchImageInput = styled.input`
  position: absolute;
  bottom: 50%;
  left: 1.6rem;
  transform: translateY(50%);
`;
export const SearchInput = styled.input`
  background-color: var(--button-grey-light);
  outline: none;
  border-radius: 1rem;
  color: #666;
  font-size: 1.6rem;
  padding: 1.5rem 1.6rem 1.5rem 4.1rem;
  border: none;
  width: 100%;
`;
