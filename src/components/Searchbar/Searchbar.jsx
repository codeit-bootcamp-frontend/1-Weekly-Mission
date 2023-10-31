import { useState } from 'react';

import IMAGES from '../../assets/images.js';
import * as S from './styles.js';

const Searchbar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');
  const handleSearchDelete = (e) => {
    setSearchText('');
    handleSearch(e, '');
  };
  return (
    <S.SearchbarForm onSubmit={(e) => handleSearch(e, searchText)}>
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
          onChange={(e) => setSearchText(e.target.value)}
        />
      </S.SearchbarInnerBox>
      {searchText !== '' && (
        <S.SearchbarDeleteBox
          onClick={(e) => handleSearchDelete(e, searchText)}>
          <p>❌</p>
        </S.SearchbarDeleteBox>
      )}
    </S.SearchbarForm>
  );
};

export default Searchbar;
