import React from 'react';
import { searchIcon } from '../../constants/globalImages';

function CardSearchBar() {
  return (
    <div className="search-bar">
      <img src={searchIcon} alt="검색아이콘" />
      <input
        className="search-input"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </div>
  );
}

export default CardSearchBar;
