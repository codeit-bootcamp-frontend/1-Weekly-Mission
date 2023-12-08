import { getSampleUserProfile } from "pages/api/api";
import { useCallback, useEffect, useState } from "react";

type Return = {
  folder: {};
  cards: Card[];
};

export const useProfileInfo = (): Return => {
  const [folder, setFolder] = useState({});
  const [cards, setCards] = useState([]);

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

  return { cards, folder };
};
