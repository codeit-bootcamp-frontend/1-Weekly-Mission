import Banner from 'components/Banner/Banner';
import CardList from 'components/CardList/CardList';
import Search from 'components/Search/Search';
import { useCallback, useEffect, useState } from 'react';
import { getSampleUserProfile } from 'services/api';
import './Card.css';

function Card() {
  const [folder, setFolder] = useState({});
  const [card, setCard] = useState(null);

  const profileInfo = useCallback(async () => {
    const introResult = await getSampleUserProfile();
    if (!introResult) return;

    const { folder } = introResult;
    const { folder: cardFolder } = introResult;
    const { links } = cardFolder;

    setFolder(folder);
    setCard(links);
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
