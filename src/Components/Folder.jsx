import { useCallback, useEffect, useState } from 'react';
import { getFolder } from '../api/apiClient';
import useAsync from '../hooks/useAsync';
import Banner from './Banner';
import SearchBar from './SearchBar';
import CardList from './CardList';

function Folder() {
  const [isLoading, loadingError, getFolderAsync] = useAsync(getFolder);
  const [links, setLinks] = useState([]);
  const [folderInfo, setFolderInfo] = useState();

  const loadFolder = useCallback(async () => {
    const { folder } = await getFolderAsync();
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
      <div className='content-container'>
        <SearchBar />
        {links && <CardList links={links} />}
      </div>
    </main>
  );
}

export default Folder;
