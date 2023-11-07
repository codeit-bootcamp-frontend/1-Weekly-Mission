import CardList from '../components/common/CardList';
import User from '../components/Shared/User';
import Search from '../components/common/Search';
import getData from '../services/api';
import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';

export default function Shared() {
  const [cards, setCards] = useState([]);
  const [folderInfo, setFolderInfo] = useState(null);
  const urlPath = useOutletContext();

  const getFolderData = useCallback(async () => {
    const { folder } = await getData('sample/folder');
    setFolderInfo(folder);
    setCards(folder.links);
  }, []);

  useEffect(() => {
    getFolderData();
  }, [getFolderData]);

  return (
    <div>
      <User folderInfo={folderInfo} />
      <Container>
        <Search />
      </Container>
      <CardList cards={cards} urlPath={urlPath} />
    </div>
  );
}

const Container = styled.div`
  padding: 0 32px;
`;
