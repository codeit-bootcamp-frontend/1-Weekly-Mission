import CardList from '../components/CardList';
import User from '../components/User';
import Search from '../components/Search';
import getData from '../services/api';
import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 32px;
`;

export default function Shared() {
  const [cards, setcards] = useState([]);
  const [folderInfo, setFolderInfo] = useState(null);

  const getFolerData = useCallback(async () => {
    const { folder } = await getData('sample/folder');
    setFolderInfo(folder);
    setcards(folder.links);
  }, []);

  useEffect(() => {
    getFolerData();
  }, [getFolerData]);

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
