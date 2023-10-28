import Main from '../Main/Main';
import SearchForm from '../Search/SearchForm';
import FolderCategory from './FolderCategory';
import FolderCategoryPage from './FolderCategoryPage';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { getFolders } from '../../api/api';

const ENTIRE_CATEGORY = {
  id: 0,
  name: '전체',
};

function FolderMain() {
  const [categories, setCategories] = useState([]);
  const [isLoadingFolders, foldersLoadingError, getFoldersAsync] = useAsync(getFolders);

  const handleLoad = useCallback(
    async () => {
      const result = await getFoldersAsync();
      if (!result) {
        return;
      }
      const { data } = { ...result };

      setCategories([ENTIRE_CATEGORY, ...data]);
    }, [getFoldersAsync],
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <Main>
      <SearchForm />
      <FolderCategory categories={categories} loadingError={foldersLoadingError}/>
      <FolderCategoryPage />
    </Main>
  );
}

export default FolderMain;

