import CardList from 'components/CardList/CardList';
import FolderList from 'components/FolderList/FolderList';
import LinkAdd from 'components/LinkAdd/LinkAdd';
import NotFoundLink from 'components/NotFoundLink/NotFoundLink';
import Search from 'components/Search/Search';
import Title from 'components/Title/Title';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllFolder, getOtherFolder, getUserFolder } from 'services/api';
import isEmpty from 'utils/isEmpty';

function Folder() {
  const [folders, setFolders] = useState(null);
  const [card, setCard] = useState([]);
  const [folderName, setFolderName] = useState('');

  const [folderParams, setFolderParams] = useSearchParams();
  const initFolderId = folderParams.get('folderId');

  const folderInfo = useCallback(async () => {
    const introResult = await getUserFolder();
    if (!introResult) return;

    const { data } = introResult;

    const currentId = data.filter((data) => data.id === Number(initFolderId));

    let folderName;
    isEmpty(currentId) ? (folderName = '전체') : (folderName = currentId[0].name);

    setFolderName(folderName);
    setFolders(data);
  }, [initFolderId]);

  const cardInfo = useCallback(async () => {
    const introResult = isEmpty(initFolderId) ? await getAllFolder() : await getOtherFolder(initFolderId);
    if (!introResult) return;

    const { data } = introResult;
    setCard(data);
  }, [initFolderId]);

  useEffect(() => {
    folderInfo();
    cardInfo();
    return setCard([]);
  }, [folderInfo, cardInfo]);

  return (
    <>
      <LinkAdd />
      <div className="main-section">
        <Search />
        {folders && <FolderList folderData={folders} />}
        <Title folderName={folderName} />
        {initFolderId && card.length === 0 ? <NotFoundLink /> : <CardList cardData={card} />}
      </div>
    </>
  );
}

export default Folder;
