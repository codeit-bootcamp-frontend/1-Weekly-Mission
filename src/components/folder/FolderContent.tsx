import styled from 'styled-components';
import useGetFolders from 'hooks/useGetFolders';
import SearchBar from 'components/common/SearchBar';
import CardList from 'components/common/Card/CardList';
import FolderNav from './FolderNav';
import AddFolderBtn from './AddFolderBtn';
import FolderTitle from './FolderTitle';
import ChoiceBar from './ChoiceBar';
import { useState } from 'react';
import { ALL_ID } from 'constants/default';

function FolderContent() {
  const foldersData = useGetFolders(1);
  const [folder, setFolder] = useState(ALL_ID);
  const [search, setSearch] = useState(false);
  const [keyword, setKeyword] = useState('');

  function handleChangeFolder(id: number): void {
    setFolder(id);
  }

  function handleChangeFolderAll(): void {
    setFolder(ALL_ID);
  }

  return (
    <Main>
      <Container>
        <SearchBar search={search} setSearch={setSearch} setKeyword={setKeyword} />
        {search && (
          <Result>
            <Black>{keyword}</Black>(으)로 검색한 결과입니다.
          </Result>
        )}
        {foldersData ? (
          <>
            <NavContainer>
              <FolderNav folders={foldersData} selectedFolderId={folder} onChangeFolder={handleChangeFolder} onChangeFolderAll={handleChangeFolderAll} />
              <AddFolderBtn />
            </NavContainer>
            <TitleContainer>
              <FolderTitle folders={foldersData} selectedFolderId={folder} />
              {folder !== ALL_ID && <ChoiceBar folders={foldersData} selectedFolderId={folder} />}
            </TitleContainer>
            <CardList folderId={folder} search={search} keyword={keyword} />
          </>
        ) : (
          <NoLinkMsg>저장된 링크가 없습니다.</NoLinkMsg>
        )}
      </Container>
    </Main>
  );
}

export default FolderContent;

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

const Black = styled.span`
  color: black;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.2px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Result = styled.div`
  padding-top: 40px;

  color: var(--gray-60);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.2px;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const NavContainer = styled.div`
  padding: 40px 0 0;
  display: flex;
  justify-content: space-between;
`;

const NoLinkMsg = styled.div`
  padding: 100px 0;
  text-align: center;
  font-size: 1.6rem;
  line-height: 24px;
`;

const TitleContainer = styled.div`
  padding: 24px 0 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`;
