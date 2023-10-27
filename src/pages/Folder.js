import CardList from 'components/CardList/CardList';
import FolderList from 'components/FolderList/FolderList';
import LinkAdd from 'components/LinkAdd/LinkAdd';
import Search from 'components/Search/Search';
import Title from 'components/Title/Title';
import { useCallback, useEffect, useState } from 'react';
import { getAllFolder, getUserFolder } from 'services/api';

function Folder() {
  const [folders, setFolders] = useState(null);
  const [card, setCard] = useState([]);

  const folderInfo = useCallback(async () => {
    const introResult = await getUserFolder();
    if (!introResult) return;

    const { data } = introResult;

    setFolders(data);
  }, []);

  const allFolderInfo = useCallback(async () => {
    const introResult = await getAllFolder();
    if (!introResult) return;

    const { data } = introResult;

    setCard(data);
  }, []);

  useEffect(() => {
    folderInfo();
    allFolderInfo();
  }, [folderInfo, allFolderInfo]);

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
