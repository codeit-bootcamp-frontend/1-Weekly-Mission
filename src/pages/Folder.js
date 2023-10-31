import { useEffect, useState, useCallback } from 'react';
import LinkAdd from '../components/Folder/LinkAdd';
import Search from '../components/common/Search';
import FolderList from '../components/Folder/FolderList';
import CardList from '../components/common/CardList';
import Option from '../components/Folder/Options';
import styled from 'styled-components';
import getData from '../services/api';

const INIT_FOLDER = {
  name: '전체',
  id: '',
};

export default function Folder() {
  const [userFolder, setUserFolder] = useState(null);
  const [links, setLinks] = useState();
  const [currentFolder, setCurrentFolder] = useState(INIT_FOLDER);

  const getFolderData = useCallback(async (id) => {
    const { data } = await getData('users/1/folders');
    const linkData = await getData(`users/1/links?folderId=${id}`);
    setUserFolder(data);
    setLinks(linkData.data);
  }, []);

  const handleCurrentFolder = ({ id, name }) => {
    setCurrentFolder({ id, name });
  };

  useEffect(() => {
    getFolderData(currentFolder.id);
  }, [getFolderData, currentFolder.id]);

  return (
    <div className='folder'>
      <LinkAdd />
      <Container>
        <Search />
        {userFolder ? (
          <div>
            <FolderList
              userFolder={userFolder}
              onCurrentFolder={handleCurrentFolder}
            />
            <Option currentFolder={currentFolder} />
            {links.length === 0 ? (
              <Div>저장된 링크가 없습니다</Div>
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

const Div = styled.div`
  max-width: 1060px;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin: 0 auto 100px;
`;

const Container = styled.div`
  padding: 0 32px;
`;
