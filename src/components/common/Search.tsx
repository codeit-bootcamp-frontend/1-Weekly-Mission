import { ChangeEvent } from 'react';
import searchImg from '../../assets/images/Search.svg';
import clearImg from '../../assets/images/input_Delete.svg';
import styled from 'styled-components';

interface Props {
  value: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onInputClear: () => void;
}

export default function Search({ value, onInputChange, onInputClear }: Props) {
  return (
    <Container>
      <Box>
        <Img src={searchImg} alt='search' />
        <Input
          type='text'
          placeholder='링크를 검색해 보세요'
          onChange={onInputChange}
          value={value}
        />
        {value && <Clear src={clearImg} alt='clear' onClick={onInputClear} />}
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
  height: 54px;
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

const Clear = styled.img`
  cursor: pointer;
`;
