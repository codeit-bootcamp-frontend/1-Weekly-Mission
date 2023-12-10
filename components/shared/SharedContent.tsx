import styled from 'styled-components';
import useGetSampleFolder from '@/hooks/useGetSampleFolder';
import SearchBar from '@/components/common/Search/SearchBar';
import CardList from '@/components/common/Card/CardList';
import FolderInfo from './FolderInfo';
import SearchResult from '@/components/common/Search/SearchResult';
import { SAMPLE_ID } from '@/lib/constants/default';
import { useState } from 'react';
import { DEVICE_SIZE } from '@/lib/styles/DeviceSize';

function SharedContent() {
  const folderData = useGetSampleFolder();
  const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState('');

  return (
    <>
      {folderData && <FolderInfo folder={folderData} />}
      <Main>
        <Container>
          <SearchBar search={search} setSearch={setSearch} setKeyword={setKeyword} />
          {search && <SearchResult keyword={keyword} />}
          <CardList folderId={SAMPLE_ID} search={search} keyword={keyword} />
        </Container>
      </Main>
    </>
  );
}

export default SharedContent;

const Main = styled.main`
  margin: 40px 0px;
`;

const Container = styled.div`
  width: 1060px;
  margin: 0 auto;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 704px;
  }

  /* Mobile */
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
    padding: 0 32px;
  }
`;
