import { useCallback, useEffect, useState } from 'react';
import { getFolder } from '../api/apiClient';
import useAsync from '../hooks/useAsync';
import Banner from './Banner';
import SearchBar from './SearchBar';
import CardList from './CardList';

function Folder() {
  const [data, isLoading, loadingError, getFolderAsync] = useAsync(getFolder);

  const folder = data?.folder;
  const name = folder?.name;
  const owner = folder?.owner;
  const links = folder?.links;

  return (
    <main>
      {data && <Banner info={{ name, owner }} />}
      <div className='content-container'>
        <SearchBar />
        {data && <CardList links={links} />}
      </div>
    </main>
  );
}

export default Folder;
