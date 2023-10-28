import FolderProfile from '../components/Folder/FolderProfile';
import FolderMain from '../components/Folder/FolderMain';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import { getCards } from '../api/user';

function Folder() {
  const [folderProfile, setFolderProfile] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoadingCards, cardsLoadingError, getCardsAsync] = useAsync(getCards);

  const handleLoad = useCallback(
    async () => {
      const result = await getCardsAsync();
      if (!result) {
        return;
      }

      const { name, owner, links: cards } = { ...result.folder };

      setFolderProfile({
        avatarUrl: owner?.profileImageSource ?? '',
        ownerName: owner?.name ?? '',
        folderName: name,
      });
      setCards(cards);
    }, [getCardsAsync],
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <FolderProfile folderProfile={folderProfile} />
      <FolderMain cards={cards} cardsLoadingError={cardsLoadingError} />
    </>
  )
}

export default Folder;
