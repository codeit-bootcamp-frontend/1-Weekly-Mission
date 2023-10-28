import FolderProfile from '../components/Folder/FolderProfile';
import FolderMain from '../components/Folder/FolderMain';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../hooks/useAsync';
import { getShared } from '../api/api';

function Folder() {
  const [folderProfile, setFolderProfile] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoadingShared, sharedLoadingError, getSharedAsync] = useAsync(getShared);

  const handleLoad = useCallback(
    async () => {
      const result = await getSharedAsync();
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
    }, [getSharedAsync],
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <FolderProfile folderProfile={folderProfile} />
      <FolderMain cards={cards} cardsLoadingError={sharedLoadingError} />
    </>
  )
}

export default Folder;
