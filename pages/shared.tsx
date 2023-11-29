import { getSampleUserProfile } from "pages/api/api";
import { useCallback, useEffect, useState } from "react";
import Banner from "src/components/Banner/Banner";
import CardList from "src/components/CardList/CardList";
import MainSection from "src/components/MainSection/MainSection";

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
        {cards && <CardList card={cards} isCardEditable={false} />}
      </MainSection>
    </>
  );
}

export default Shared;
