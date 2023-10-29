import CategoryTitleContainer from './CategoryTitleContainer';
import styled from 'styled-components';

function FolderCategoryControl({ name }) {
  return (
    <FolderCategoryControlStyle>
      <CategoryTitleContainer name={name} />
    </FolderCategoryControlStyle>
  );
}

export default FolderCategoryControl;

const FolderCategoryControlStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
`;
