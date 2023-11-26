import { ChangeEvent, useState } from 'react';
import searchIcon from 'images/search.svg';
import deleteIcon from 'images/search_delete.png';
import * as S from './SearchBar.style';

interface Props {
  setSearchKeyword: (value: string) => void;
}

function SearchBar({ setSearchKeyword }: Props) {
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
        <S.SearchIcon src={searchIcon} alt='검색 아이콘' />
        {value && (
          <S.DeleteIcon
            src={deleteIcon}
            alt='검색어 삭제 아이콘'
            onClick={handleDeleteClick}
          />
        )}
      </S.Form>
      {value && (
        <S.Text>
          <span>{value}</span>으로 검색한 결과입니다.
        </S.Text>
      )}
    </S.Container>
  );
}

export default SearchBar;
