import Cards from './Card';
import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  width: 100%;

  @media (max-width: 1124px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 779px) {
    padding: 0 3.2rem;
    gap: 3.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

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

export const SectionContainer = styled.section`
  display: grid;
  gap: 2.5rem 2rem;
  grid-template-columns: repeat(3, 34rem);
  grid-template-rows: repeat(3, 33.4rem);

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 34rem);
    grid-template-rows: repeat(auto, 33.4rem);
  }

  @media (max-width: 779px) {
    grid-template-columns: repeat(1, 34rem);
    grid-template-rows: repeat(auto, 33.4rem);
  }
`;

const Main = ( {folder} ) => {
  return (
    <MainContainer>
      <FormContainer>
        <SearchInput 
          name="searchKeyword" 
          type="search" 
          autoComplete="on"
          required placeholder="링크를 검색해 보세요.">
        </SearchInput>  {/*돋보기 아이콘 삽입해야 함*/}
      </FormContainer>
      <SectionContainer>
        <Cards folderCards={folder.links}/>
      </SectionContainer>
    </MainContainer>
  )
}

export default Main;