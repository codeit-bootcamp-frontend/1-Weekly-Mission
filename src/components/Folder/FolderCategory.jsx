import styled from 'styled-components';
import FolderCategoryButton from './FolderCategoryButton';
import { Fragment, useCallback, useEffect, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { getFolders } from '../../api/api';
import add_icon from '../../assets/svg/add-folder.svg';

const ENTIRE_CATEGORY = {
  id: 0,
  name: '전체',
};

function FolderCategory({ onGetCategory }) {
  const [categories, setCategories] = useState([]);
  const [, foldersLoadingError, getFoldersAsync] = useAsync(getFolders);

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
    <FolderCategoryContainer>
      <FolderCategoryStyle>
        {categories.map((category) => {
          return (
            <Fragment key={category.id}>
              <FolderCategoryButton category={category} onGetCategory={onGetCategory}></FolderCategoryButton>
              {foldersLoadingError?.message && <span>{foldersLoadingError.message}</span>}
            </Fragment>
          );
        })
        }
      </FolderCategoryStyle>
      <FolderAddButton>
        <FolderAddName>폴더 추가</FolderAddName>
        <FolderAddIcon src={add_icon} alt='폴더 추가 아이콘' />
      </FolderAddButton>
    </FolderCategoryContainer>
  );
}

export default FolderCategory;

const FolderCategoryStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  row-gap: 1.2rem;
  column-gap: 0.8rem;
  width: 100%;
  flex-wrap: wrap;
`;

const FolderCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const FolderAddButton = styled.button`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 0.4rem;  
  }
`;

const FolderAddName = styled.p`
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  white-space: nowrap;
`;

const FolderAddIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
