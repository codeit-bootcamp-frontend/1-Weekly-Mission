import React, { useCallback, useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';
import Banner from './Banner';
import CardList from './CardList';
import Search from './Search';
import './main.css';

function Main() {
  const [folder, setFolder] = useState({});
  const [card, setCard] = useState(null);

  const profileInfo = useCallback(async () => {
    const introResult = await getUserProfile();
    if (!introResult) return;

    const { folder } = introResult;

    setFolder(folder);
    setCard(folder);
  }, []);

  useEffect(() => {
    profileInfo();
  }, [profileInfo]);

  return (
    <main>
      {folder && <Banner folderData={folder} />}
      <div className="main-section">
        <Search />
        {card && <CardList cardData={card} />}
      </div>
    </main>
  );
}

export default Main;
