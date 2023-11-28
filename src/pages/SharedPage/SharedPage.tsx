import FolderInfo from 'components/FolderInfo';
import SearchBar from 'components/SearchBar';
import SampleCardList from 'components/SampleCardList';
import { MainDiv } from 'styles/MainDiv';
import { useState } from 'react';

function SharedPage() {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <>
      <FolderInfo />
      <MainDiv>
        <SearchBar setSearchKeyword={setSearchKeyword} />
        <SampleCardList searchKeyword={searchKeyword} />
      </MainDiv>
    </>
  );
}

export default SharedPage;
