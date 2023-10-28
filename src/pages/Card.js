import Banner from 'components/Banner/Banner';
import CardList from 'components/CardList/CardList';
import MainSection from 'components/MainSection/MainSection';
import Search from 'components/Search/Search';
import { useCallback, useEffect, useState } from 'react';
import { getSampleUserProfile } from 'services/api';

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
      <MainSection>
        <Search />
        {card && <CardList cardData={card} />}
      </MainSection>
    </>
  );
}

export default Card;
