import styled from 'styled-components';

function LinkSearchInput() {
  return (
    <FormContainer>
      <SearchInput
        name="searchKeyword"
        type="search"
        autoComplete="on"
        required
        placeholder="링크를 검색해 보세요."
      ></SearchInput>{' '}
      {/*돋보기 아이콘 삽입해야 함*/}
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  height: 4.5rem;
  width: 106rem;
  margin: 1.6rem 0 1.6rem;

  @media (max-width: 1124px) {
    width: 100%;
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

  &:focus {
    border: 0.1rem solid var(--primary);
    outline: none;
  }

  @media (max-width: 779px) {
    padding: 1.3rem 1.6rem;
  }
`;

export default LinkSearchInput;
