import styled from 'styled-components';
import FolderCategoryButton from './FolderCategoryButton';
import { Fragment } from 'react';

function FolderCategory({ categories, loadingError }) {
  return (
    <FolderCategoryStyle>
      {categories.map((category) => {
        return (
          <Fragment key={category.id}>
            <FolderCategoryButton name={category.name}></FolderCategoryButton>
            {loadingError?.message && <span>{loadingError.message}</span>}
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
  justify-content: flex-start;
  row-gap: 1.2rem;
  column-gap: 0.8rem;
  width: 100%;
  flex-wrap: wrap;
`;
