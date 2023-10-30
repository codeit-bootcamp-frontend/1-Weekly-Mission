import styled from 'styled-components';
import CardList from './CardList';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import { getCards } from '../api/api';
import FolderButton from './FolderButton';

const INITIAL_FOLDER = {
  id: '',
  name: '전체',
};

function FolderList({ folderList = null, onChange }) {
  const [folderId, setFolderId] = useState('');
  const [folderName, setFolderName] = useState('전체');

  const handleButton = (name, id) => {
    setFolderId(id);
    setFolderName(name);
    onChange(id);
  };
  return (
    <div>
      <div>
        <FolderButton folder={INITIAL_FOLDER} handleButton={handleButton} />
      </div>
      <h1>{folderName}</h1>
    </div>
  );
}

function Folder({ folderList = null }) {
  // const [cards, setCards] = useState();

  // const [isLoadingCards, loadingCardsError, getCardsAsync] = useAsync(getCards);

  // const handleCardLoad = useCallback(async () => {
  //   const result = await getCardsAsync();
  //   if (!result) {
  //     return;
  //   }
  //   const receivedCards = result.data; // 배열로 받음
  //   console.log(receivedCards);
  //   setCards(receivedCards);
  // }, [getCardsAsync]);

  // useEffect(() => {
  //   handleCardLoad();
  // }, [handleCardLoad]);

  return (
    <Container>
      <FolderList />
      <NoSavedLinks>
        <p>저장된 링크가 없습니다.</p>
      </NoSavedLinks>
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
`;

const NoSavedLinks = styled.div`
  display: flex;
  width: 106rem;
  height: 10rem;
  padding: 4.1rem 0 3.5rem 0;
  justify-content: center;
  align-items: center;

  p {
    color: #000;
    text-align: center;
    font-size: 1.6rem;
    line-height: 24px;
  }
`;
