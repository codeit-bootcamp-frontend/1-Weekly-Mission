import searchIcon from "src/assets/icons/search.svg";
import Icon from "src/components/Icon";
import theme from "src/styles/Theme/theme";
import styled from "styled-components";

function Search() {
  return (
    <StyledWrapper>
      <StyledSearchImg>
        <Icon src={searchIcon} alt="돋보기" />
      </StyledSearchImg>
      <StyledInput type="text" placeholder="링크를 검색해 보세요." />
    </StyledWrapper>
  );
}

export default Search;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray};
  width: 100%;
  padding: 1.7rem;
  border-radius: 1rem;
  font-weight: ${theme.fontWeight.normal};
`;

const StyledSearchImg = styled.div`
  margin-right: 1rem;
`;

const StyledInput = styled.input`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 0.2rem;
  font-size: 1.4rem;
`;
