import { useCallback, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import FolderList from '../components/FolderList';
import LinkAdd from '../components/LinkAdd';
import Search from '../components/Search';
import Title from '../components/Title';
import { getUserFolder, getUserProfile } from '../services/api';

function Folder() {
  const [folders, setFolders] = useState(null);
  const [card, setCard] = useState(null);

  const profileInfo = useCallback(async () => {
    const introResult = await getUserProfile();
    if (!introResult) return;

    const { folder } = introResult;

    setCard(folder);
  }, []);

  const folderInfo = useCallback(async () => {
    const introResult = await getUserFolder();
    if (!introResult) return;

    const { data } = introResult;

    setFolders(data);
  }, []);

  useEffect(() => {
    profileInfo();
    folderInfo();
  }, [profileInfo, folderInfo]);

  return (
    <>
      <LinkAdd />
      <div className="main-section">
        <Search />
        {folders && <FolderList folderData={folders} />}
        <Title />
        {card && <CardList cardData={card} />}
      </div>
    </>
  );
}

export default Folder;
