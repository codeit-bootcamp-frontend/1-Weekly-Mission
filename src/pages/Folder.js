import { useCallback, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import LinkAdd from '../components/LinkAdd';
import Search from '../components/Search';
import { getUserProfile } from '../services/api';

function Folder() {
  const [card, setCard] = useState(null);
  const profileInfo = useCallback(async () => {
    const introResult = await getUserProfile();
    if (!introResult) return;

    const { folder } = introResult;

    setCard(folder);
  }, []);

  useEffect(() => {
    profileInfo();
  }, [profileInfo]);
  return (
    <>
      <LinkAdd />
      <div className="main-section">
        <Search />
        {card && <CardList cardData={card} />}
      </div>
    </>
  );
}

export default Folder;
