import AddLink from '../components/AddLink';
import styled from 'styled-components';
import Folder from '../components/Folder';
import SearchBar from '../components/SearchBar';

import useAsync from '../hooks/useAsync';
import { getFolders } from '../api/api';
import { useCallback, useEffect, useState } from 'react';
import MobileFolderButton from '../components/MobileFolderButton';
import Modal from '../components/Modal/RenameFolderModal';

function FolderPage() {
  const [folderList, setFolderList] = useState([]);

  const [, , getFolderListAsync] = useAsync(getFolders);

  const handleFolderListLoad = useCallback(async () => {
    const result = await getFolderListAsync();
    if (!result) {
      return;
    }
    const receivedFolders = result?.data;
    setFolderList(receivedFolders);
  }, [getFolderListAsync]);

  useEffect(() => {
    handleFolderListLoad();
  }, []);

  return (
    <>
      <Container>
        <MobileFolderButton />
        <AddLink />
        <ContentContainer>
          <SearchBar />
          <AddFolderButton>폴더 추가</AddFolderButton>
          <Folder folderList={folderList} />
        </ContentContainer>
      </Container>
    </>
  );
}

export default FolderPage;

const Container = styled.div`
  min-height: 90vh;
`;

const ContentContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 3.2rem;
`;

const AddFolderButton = styled.button`
  position: absolute;
  top: 9rem;
  right: 23rem;
  background-color: transparent;
  color: var(--primary);
  border: none;

  @media (max-width: 768px) {
    display: none;
  }
`;
