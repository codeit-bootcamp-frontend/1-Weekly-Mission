import SharedProfile from '../components/Shared/SharedProfile';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import { getShared } from '../api/api';
import SharedMain from '../components/Shared/SharedMain';

function Shared() {
  const [sharedProfile, setSharedProfile] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoadingShared, sharedLoadingError, getSharedAsync] = useAsync(getShared);

  const handleLoad = useCallback(
    async () => {
      const result = await getSharedAsync();
      if (!result) {
        return;
      }

      const { name, owner, links: cards } = { ...result.folder };

      setSharedProfile({
        avatarUrl: owner?.profileImageSource ?? '',
        ownerName: owner?.name ?? '',
        folderName: name,
      });
      setCards(cards);
    }, [getSharedAsync],
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <SharedProfile sharedProfile={sharedProfile} />
      <SharedMain cards={cards} cardsLoadingError={sharedLoadingError} />
    </>
  )
}

export default Shared;
