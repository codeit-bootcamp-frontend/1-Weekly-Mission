import searchImg from 'assets/images/search.svg';
import styled from 'styled-components';

function SearchBar() {
  return (
    <Container>
      <Icon src={searchImg} alt="검색 돋보기 아이콘" />
      <Input placeholder="링크를 검색해 보세요." />
    </Container>
  );
}

export default SearchBar;

const Container = styled.form`
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 17px;
  left: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 40px;
  border: none;
  border-radius: 10px;
  background-color: var(--grey-light);
  font-size: 1.6rem;
`;
