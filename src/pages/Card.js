import React, { useCallback, useEffect, useState } from 'react';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Search from '../components/Search';
import { getUserProfile } from '../services/api';
import './Card.css';

function Card() {
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
    <>
      {folder && <Banner folderData={folder} />}
      <div className="main-section">
        <Search />
        {card && <CardList cardData={card} />}
      </div>
    </>
  );
}

export default Card;
