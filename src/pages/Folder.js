import { useEffect, useState, useCallback } from 'react';
import LinkAdd from '../components/LinkAdd';
import Search from '../components/Search';
import FolderList from '../components/FolderList';
import CardList from '../components/CardList';
import Option from '../components/Options';
import styled from 'styled-components';
import getData from '../services/api';

const Div = styled.div`
  max-width: 1060px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin: auto;
`;

const Container = styled.div`
  padding: 0 32px;
`;

export default function Folder() {
  const [userFolder, setUserFolder] = useState(null);
  const [links, setLinks] = useState();
  const [currentFolderId, setCurrentFolderId] = useState('');

  const getFolderData = useCallback(async () => {
    const { data } = await getData('users/1/folders');
    const linkData = await getData('users/1/links?folderId=' + currentFolderId);
    setUserFolder(data);
    setLinks(linkData.data);
  }, [currentFolderId]);

  const handleCurrentFolderId = (id) => {
    setCurrentFolderId(id);
  };

  useEffect(() => {
    getFolderData();
  }, [getFolderData]);

  return (
    <div className='folder'>
      <LinkAdd />
      <Container>
        <Search />
        {userFolder ? (
          <div>
            <FolderList
              userFolder={userFolder}
              onCurrentFolderId={handleCurrentFolderId}
            />
            <Option />
            {links.length === 0 ? (
              <Div>저장된 폴더가 없습니다</Div>
            ) : (
              <CardList cards={links} />
            )}
          </div>
        ) : (
          <Div>저장된 폴더가 없습니다</Div>
        )}
      </Container>
    </div>
  );
}
