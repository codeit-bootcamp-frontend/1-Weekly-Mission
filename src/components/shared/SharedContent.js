import styled from 'styled-components';
import useGetSampleFolder from 'hooks/useGetSampleFolder';
import SearchBar from 'components/common/SearchBar.js';
import CardList from 'components/common/Card/CardList.js';
import FolderInfo from './FolderInfo.js';
import { SAMPLE_ID } from 'constants/default';

function SharedContent() {
  const folderData = useGetSampleFolder();

  return (
    <>
      {folderData && <FolderInfo folder={folderData} />}
      <Main>
        <Container>
          <SearchBar />
          <CardList folderId={SAMPLE_ID} />
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

  @media (max-width: 1124px) {
    width: 704px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    width: 100%;
    padding: 0 32px;
  }
`;
