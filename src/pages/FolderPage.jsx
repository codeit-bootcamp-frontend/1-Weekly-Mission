import AddLink from '../components/AddLink';
import styled from 'styled-components';
import Folder from '../components/Folder';
import SearchBar from '../components/SearchBar';

import { useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import { getFolders } from '../api/api';
import { useCallback, useEffect, useState } from 'react';

function FolderPage() {
  const param = useParams();
  const [folderList, setFolderList] = useState([]);

  const [isLoadingFolderList, loadingFolderListError, getFolderListAsync] = useAsync(getFolders);

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
    <Container>
      <AddLink />
      <ContentContainer>
        <SearchBar />
        <AddFolderButton>폴더 추가</AddFolderButton>
        <Folder folderList={folderList} />
      </ContentContainer>
    </Container>
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
  top: 8rem;
  right: 24rem;
  background-color: transparent;
  color: var(--primary);
  border: none;
`;
