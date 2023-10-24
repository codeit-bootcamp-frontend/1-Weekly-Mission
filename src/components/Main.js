import React, { useCallback, useEffect, useState } from 'react';
import { introRequestData } from '../services/api';
import CardList from './CardList';
import Intro from './Intro';
import Search from './Search';
import './main.css';

function Main() {
  const [folderData, setFolderData] = useState({});
  const [cardData, setCardData] = useState(null);

  const profileInfo = useCallback(async () => {
    const introResult = await introRequestData();
    if (!introResult) return;

    const { folder } = introResult;

    setFolderData(folder);
    setCardData(folder);
  }, []);

  useEffect(() => {
    profileInfo();
  }, [profileInfo]);

  return (
    <main>
      {folderData && <Intro folderData={folderData} />}
      <div className="main-section">
        <Search />
        {cardData && <CardList cardData={cardData} />}
      </div>
    </main>
  );
}

export default Main;
