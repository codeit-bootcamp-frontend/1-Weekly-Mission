import SharedProfile from '../components/Shared/SharedProfile';
import { useCallback, useEffect, useState } from 'react';
import { getShared } from '../api/api';
import SharedMain from '../components/Shared/SharedMain';
import { CardProps } from '../components/Card/CardList';

type Shared = {
  name: string;
  owner?: {
    profileImageSource: string;
    name: string;
    folderName: string;
  }
  links: CardProps[];
}

const INIT_SHARED_PROFILE = {
  avatarUrl: '',
  ownerName: '',
  folderName: '',
}

function Shared() {
  const [sharedProfile, setSharedProfile] = useState(INIT_SHARED_PROFILE);
  const [cards, setCards] = useState<CardProps[]>([]);

  const handleLoad = useCallback(
    async () => {
      const result = await getShared();
      if (!result) {
        return;
      }

      const { name, owner, links: cards }: Shared = { ...result.folder };

      setSharedProfile({
        avatarUrl: owner?.profileImageSource ?? '',
        ownerName: owner?.name ?? '',
        folderName: name,
      });
      setCards(cards);
    }, [],
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <SharedProfile sharedProfile={sharedProfile} />
      <SharedMain cards={cards} />
    </>
  )
}

export default Shared;
