import { useEffect, useState, useCallback } from 'react';
import LinkAdd from '../components/Folder/LinkAdd';
import Search from '../components/common/Search';
import FolderList from '../components/Folder/FolderList';
import CardList from '../components/common/CardList';
import Option from '../components/Folder/Options';
import Modal from '../components/common/Modal';
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
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState('');

  const getFolderData = useCallback(async (id) => {
    const { data } = await getData('users/1/folders');
    const linkData = await getData(`users/1/links?folderId=${id}`);
    setUserFolder(data);
    setLinks(linkData.data);
  }, []);

  const handleCurrentFolder = ({ id, name }) => {
    setCurrentFolder({ id, name });
  };

  const handleModalOpen = (name) => {
    setIsOpen(true);
    setCurrentModal(name);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setCurrentModal('');
  };

  useEffect(() => {
    getFolderData(currentFolder.id);
  }, [getFolderData, currentFolder.id]);

  return (
    <div>
      <LinkAdd />
      <Container>
        <Search />
        {userFolder ? (
          <div>
            <FolderList
              userFolder={userFolder}
              onCurrentFolder={handleCurrentFolder}
              onModalOpen={handleModalOpen}
            />
            <Option
              currentFolder={currentFolder}
              onModalOpen={handleModalOpen}
            />
            <CardList cards={links} />
          </div>
        ) : (
          <Div>저장된 폴더가 없습니다</Div>
        )}
      </Container>
      <Modal
        isOpen={isOpen}
        currentModal={currentModal}
        onModalClose={handleModalClose}
        currentFolder={currentFolder}
      />
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
