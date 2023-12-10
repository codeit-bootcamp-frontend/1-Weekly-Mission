import { ChangeEvent, useState } from 'react';
import * as S from './SearchBar.style';
import Image from 'next/image';

interface Props {
  setSearchKeyword: (value: string) => void;
}

const SearchBar = ({ setSearchKeyword }: Props) => {
  const [value, setValue] = useState('');

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSearchKeyword(e.target.value);
  };

  const handleDeleteClick = () => {
    setValue('');
    setSearchKeyword('');
  };

  return (
    <S.Container>
      <S.Form>
        <S.Input
          value={value}
          onChange={handleValueChange}
          placeholder='링크를 검색해 보세요.'
        />
        <S.SearchIcon src='/assets/images/search.svg' alt='검색 아이콘' />
        {value ? (
          <S.DeleteIcon onClick={handleDeleteClick}>
            <Image
              fill
              src='/assets/images/search_delete.png'
              alt='검색어 삭제 아이콘'
            />
          </S.DeleteIcon>
        ) : null}
      </S.Form>
      {value ? (
        <S.Text>
          <span>{value}</span>으로 검색한 결과입니다.
        </S.Text>
      ) : null}
    </S.Container>
  );
};

export default SearchBar;
