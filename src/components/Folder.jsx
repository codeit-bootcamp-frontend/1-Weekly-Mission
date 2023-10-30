import styled from 'styled-components';
import SearchBar from './SearchBar';
import CardList from './CardList';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import { getCards, getFolders } from '../api/api';

function Folder() {
  const [cards, setCards] = useState();
  const [folders, setFolders] = useState([]);

  const [isLoadingCards, loadingCardsError, getCardsAsync] = useAsync(getCards);
  const [isLoadingFolders, loadingFoldersError, getFoldersAsync] = useAsync(getFolders);

  const handleFolderLoad = useCallback(async () => {
    const result = await getFoldersAsync();
    if (!result) {
      return;
    }
    const receivedFolders = result.data;
    setFolders(receivedFolders);
  }, [getFoldersAsync]);

  const handleCardLoad = useCallback(async () => {
    const result = await getCardsAsync();
    if (!result) {
      return;
    }
    const receivedCards = result.data; // 배열로 받음
    console.log(receivedCards);
    setCards(receivedCards);
  }, [getCardsAsync]);

  useEffect(() => {
    handleCardLoad();
    handleFolderLoad();
  }, [handleCardLoad, handleFolderLoad]);

  return (
    <Container>
      <SearchBar />
      {cards.length !== 0 ? (
        <CardList cards={cards} />
      ) : (
        <NoSavedLinks>
          <p>저장된 링크가 없습니다.</p>
        </NoSavedLinks>
      )}
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
