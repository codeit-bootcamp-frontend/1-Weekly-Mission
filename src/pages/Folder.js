import { useEffect, useState, useCallback } from 'react';
import LinkAdd from '../components/Folder/LinkAdd';
import Search from '../components/common/Search';
import FolderList from '../components/Folder/FolderList';
import CardList from '../components/common/CardList';
import Option from '../components/Folder/Options';
import Modal from '../components/common/Modal';
import styled from 'styled-components';
import getData from '../services/api';
import { useOutletContext, useSearchParams } from 'react-router-dom';

const INIT_FOLDER = { data: [{ name: '전체' }] };

export default function Folder() {
  const [userFolder, setUserFolder] = useState(null);
  const [links, setLinks] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentFolder, setCurrentFolder] = useState(INIT_FOLDER);
  const urlPath = useOutletContext();
  const paramsId = searchParams.get('folderId');

  const getFolderData = useCallback(async () => {
    const { data } = await getData('users/1/folders');
    const linkData = await getData(`users/1/links?folderId=${paramsId}`);
    let folderName =
      paramsId !== ''
        ? await getData(`users/1/folders/${paramsId}`)
        : INIT_FOLDER;
    const {
      data: [{ name }],
    } = folderName;
    setUserFolder(data);
    setLinks(linkData.data);
    setCurrentFolder({ id: paramsId, name });
  }, [paramsId]);

  const handleCurrentFolder = ({ id, name }) => {
    setSearchParams({ folderId: id });
  };

  const handleModalOpen = (name, link) => {
    setIsOpen(true);
    setCurrentModal({ name, link });
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
              searchParams={searchParams}
            />
            <Option
              currentFolder={currentFolder}
              onModalOpen={handleModalOpen}
            />
            <CardList
              cards={links}
              urlPath={urlPath}
              onModalOpen={handleModalOpen}
            />
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
        userFolder={userFolder}
        path={paramsId}
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
