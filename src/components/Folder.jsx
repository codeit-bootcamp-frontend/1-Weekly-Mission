import styled from 'styled-components';
import CardList from './CardList';
import { useEffect, useState } from 'react';
import { getCards } from '../api/api';
import FolderButton from './FolderButton';
import NoSavedLinks from './NoSavedLinks';

const INITIAL_FOLDER = {
  id: '',
  name: '전체',
};

function FolderList({ folderList = null, getCardList }) {
  const [folderId, setFolderId] = useState('');
  const [folderName, setFolderName] = useState('전체');

  const handleButton = (name, id) => {
    setFolderId(id);
    setFolderName(name);
    getCardList(id);
  };
  return (
    <div>
      <FolderListContainer>
        <FolderButton folder={INITIAL_FOLDER} handleButton={handleButton} />
        {folderList && (
          <>
            {folderList.map((folder) => {
              return (
                <div key={folder.id}>
                  <FolderButton folder={folder} handleButton={handleButton} />
                </div>
              );
            })}
          </>
        )}
      </FolderListContainer>
      <h1>{folderName}</h1>
    </div>
  );
}

function Folder({ folderList = null }) {
  const [cards, setCards] = useState();
  const getCardList = async (id = '') => {
    const result = await getCards(id);
    setCards(() => {
      return [...result?.data];
    });
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <Container>
      <FolderList folderList={folderList} getCardList={getCardList} />
      <NoSavedLinks />
      <CardList cards={cards} />
    </Container>
  );
}

export default Folder;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 4rem 19rem;
  gap: 4rem;
  border: 1px solid;
`;

const FolderListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  margin-bottom: 2.4rem;
  border: 1px solid;
`;
