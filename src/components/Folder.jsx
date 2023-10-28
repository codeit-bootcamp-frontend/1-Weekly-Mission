import styled from 'styled-components';
import SearchBar from './SearchBar';
import { useCallback, useState } from 'react';
import { getFolderCards } from '../api/api';
import useAsync from '../hooks/useAsync';

function Folder() {
  const [cards, setCards] = useState([]);
  const [isLoading, loadingError, getFolderCardsAsync] = useAsync(getFolderCards);

  const handleLoad = useCallback(async () => {
    const result = await getFolderCards();
    if (!result) {
      return;
    }
    setCards(result.data);
  }, [getFolderCardsAsync]);

  return (
    <Container>
      <SearchBar />
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
