import styled from 'styled-components';
import FolderCategoryButton from './FolderCategoryButton';
import useAsync from '../../hooks/useAsync';
import { getFolders } from '../../api/api';
import { Fragment, useCallback, useEffect, useState } from 'react';


function FolderCategory() {
  const [categories, setCategories] = useState([]);
  const [isLoadingFolders, foldersLoadingError, getFoldersAsync] = useAsync(getFolders);

  const handleLoad = useCallback(
    async () => {
      const result = await getFoldersAsync();
      if (!result) {
        return;
      }
      const { data } = { ...result };
      setCategories(data);
    }, [getFoldersAsync],
  );

  useEffect(() => {
    handleLoad();
  }, [categories]);

  return (
    <FolderCategoryStyle>
      <FolderCategoryButton name='전체'></FolderCategoryButton>
      {categories.map((category) => {
        return (
          <Fragment>
            <FolderCategoryButton name={category}></FolderCategoryButton>
            {foldersLoadingError?.message && <span>{foldersLoadingError.message}</span>}
          </Fragment>
        );
      })
      }
    </FolderCategoryStyle>
  );
}

export default FolderCategory;

const FolderCategoryStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
`;
