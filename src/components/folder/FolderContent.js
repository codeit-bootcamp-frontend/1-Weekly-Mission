import 'styles/sharedContent.css';
import { useState } from 'react';
import { ALL_ID } from 'constants/default';
import styled from 'styled-components';
import useGetFolders from 'hooks/useGetFolders';
import SearchBar from 'components/common/SearchBar.js';
import CardList from 'components/common/Card/CardList.js';
import FolderNav from './FolderNav';
import AddFolderBtn from './AddFolderBtn';
import FolderTitle from './FolderTitle';
import ChoiceBar from './ChoiceBar';

function FolderContent() {
  const foldersData = useGetFolders(1);
  const [folder, setFolder] = useState(ALL_ID);

  function handleChangeFolderAll() {
    setFolder(ALL_ID);
  }

  function handleChangeFolder(id) {
    setFolder(id);
  }

  return (
    <main>
      <div className="content_container">
        <SearchBar />
        {foldersData ? (
          <>
            <NavContainer>
              <FolderNav folders={foldersData} selectedFolderId={folder} onChangeFolder={handleChangeFolder} onChangeFolderAll={handleChangeFolderAll} />
              <AddFolderBtn />
            </NavContainer>
            <TitleContainer>
              <FolderTitle folders={foldersData} selectedFolderId={folder} />
              {folder !== ALL_ID && <ChoiceBar />}
            </TitleContainer>
            <CardList folderId={folder} />
          </>
        ) : (
          <NoLinkMsg>저장된 링크가 없습니다.</NoLinkMsg>
        )}
      </div>
    </main>
  );
}

export default FolderContent;

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
