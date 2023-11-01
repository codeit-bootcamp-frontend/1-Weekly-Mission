import Banner from 'components/Banner/Banner';
import CardList from 'components/CardList/CardList';
import MainSection from 'components/MainSection/MainSection';
import Search from 'components/Search/Search';
import { useCallback, useEffect, useState } from 'react';
import { getSampleUserProfile } from 'services/api';

function Shared() {
  const [folder, setFolder] = useState({});
  const [cards, setCards] = useState(null);

  const profileInfo = useCallback(async () => {
    const introResult = await getSampleUserProfile();
    if (!introResult) return;

    const { folder } = introResult;
    const { folder: cardFolder } = introResult;
    const { links } = cardFolder;

    setFolder(folder);
    setCards(links);
  }, []);

  useEffect(() => {
    profileInfo();
  }, [profileInfo]);

  return (
    <>
      {folder && <Banner folder={folder} />}
      <MainSection>
        <Search />
        {cards && <CardList card={cards} isCardEditable={false} />}
      </MainSection>
    </>
  );
}

export default Shared;
