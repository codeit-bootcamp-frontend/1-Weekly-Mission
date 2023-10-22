import { useCallback, useEffect, useState } from 'react';
import { getFolder } from '../api/apiClient';
import Banner from './Banner';
import SearchBar from './SearchBar';
import CardList from './CardList';

function Folder() {
  const [links, setLinks] = useState([]);
  const [folderInfo, setFolderInfo] = useState();

  const loadFolder = useCallback(async () => {
    const { folder } = await getFolder();
    const { name, owner, links: linksData } = folder;
    const folderInfoData = { name, owner };
    setFolderInfo(folderInfoData);
    setLinks(linksData);
  }, []);

  useEffect(() => {
    loadFolder();
  }, [loadFolder]);

  return (
    <main>
      {folderInfo && <Banner info={folderInfo} />}
      <div className='folder-container'>
        <SearchBar />
        {links && <CardList links={links} />}
      </div>
    </main>
  );
}

export default Folder;
