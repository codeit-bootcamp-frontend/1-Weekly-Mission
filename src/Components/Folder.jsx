import { useCallback, useEffect, useState } from 'react';
import { fetchFolder } from '../api/fetchAPI';
import Banner from './Banner';
import CardList from './CardList';

function Folder() {
  const [links, setLinks] = useState();
  const [folderInfo, setFolderInfo] = useState();

  const getFolder = useCallback(async () => {
    const { folder } = await fetchFolder();
    const { name, owner, links: linksData } = folder;
    const folderInfoData = { name, owner };
    setFolderInfo(folderInfoData);
    setLinks(linksData);
  }, []);

  useEffect(() => {
    getFolder();
  }, [getFolder]);

  return (
    <main>
      <Banner info={folderInfo} />
      <CardList links={links} />
    </main>
  );
}

export default Folder;
