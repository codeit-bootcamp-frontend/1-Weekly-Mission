import CardList from '../components/CardList';
import User from '../components/User';
import Search from '../components/Search';
import getData from '../services/api';
import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

export default function Shared() {
  const [cards, setCards] = useState([]);
  const [folderInfo, setFolderInfo] = useState(null);

  const getFolderData = useCallback(async () => {
    const { folder } = await getData('sample/folder');
    setFolderInfo(folder);
    setCards(folder.links);
  }, []);

  useEffect(() => {
    getFolderData();
  }, [getFolderData]);

  return (
    <div className='App'>
      <User folderInfo={folderInfo} />
      <Container>
        <Search />
      </Container>
      <CardList cards={cards} />
    </div>
  );
}

const Container = styled.div`
  padding: 0 32px;
`;
