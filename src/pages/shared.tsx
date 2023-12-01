import FolderInfo from '@components/FolderInfo';
import SearchBar from '@components/SearchBar';
import SampleCardList from '@components/SampleCardList';
import { MainDiv } from '@styles/MainDiv';
import { useState } from 'react';

export default function Shared() {
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
