import Cards from './Card';
import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  height: 4.5rem;
  width: 106rem;

  @media (max-width: 1124px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1.5rem 1.6rem;
  border-radius: 1rem;
  background: var(--grayLight);
  border: 0;

  &:focus {
    border: 0.1rem solid var(--primary);
    outline: none;
  }

  @media (max-width: 779px) {
    padding: 1.3rem 1.6rem;
  }
`;

const LinkSearchInput = () => {
  return (
    <FormContainer>
      <SearchInput 
        name="searchKeyword" 
        type="search" 
        autoComplete="on"
        required placeholder="링크를 검색해 보세요.">
      </SearchInput>  {/*돋보기 아이콘 삽입해야 함*/}
    </FormContainer>
  )
}

export default LinkSearchInput;