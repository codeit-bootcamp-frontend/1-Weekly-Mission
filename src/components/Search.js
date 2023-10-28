import searchImg from '../assets/images/Search.svg';
// import '../styles/Search.css';
import styled from 'styled-components';

export default function Search() {
  return (
    <Container className='search'>
      <Box className='search-box'>
        <Img src={searchImg} alt='search' className='serach-img' />
        <Input
          type='text'
          className='search-input'
          placeholder='링크를 검색해 보세요'
        />
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: var(--linkbrary-white);
  padding: 40px 0;
`;

const Box = styled.div`
  margin: auto;
  max-width: 1060px;
  background-color: #f5f5f5;
  padding: 15px 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
`;

const Input = styled.input`
  width: 95%;
  background-color: transparent;
  border: none;
  outline: none;
`;
