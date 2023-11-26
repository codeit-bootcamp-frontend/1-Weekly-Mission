import React, { useState, ChangeEvent } from 'react';

import IMAGES from '../../assets/images';
import * as S from './styles';

interface SearchbarProps {
  handleSearch: (value: string) => void;
}

const Searchbar = ({ handleSearch }: SearchbarProps) => {
  const [searchText, setSearchText] = useState('');
  const handleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
    setSearchText(e.target.value);
  };
  const handleSearchDelete = () => {
    handleSearch('');
    setSearchText('');
  };

  return (
    <S.SearchbarForm>
      <S.SearchbarInnerBox>
        <label htmlFor="search">
          <img src={IMAGES.search} alt="Search" />
        </label>
        <S.SearchbarInput
          id="search"
          name="search"
          value={searchText}
          placeholder="링크를 검색해 보세요"
          autoFocus
          onChange={handleSearchText}
        />
      </S.SearchbarInnerBox>
      {searchText !== '' && (
        <S.SearchbarDeleteBox onClick={handleSearchDelete}>
          <img src={IMAGES.close} alt="검색창 지우기" />
        </S.SearchbarDeleteBox>
      )}
    </S.SearchbarForm>
  );
};

export default Searchbar;
