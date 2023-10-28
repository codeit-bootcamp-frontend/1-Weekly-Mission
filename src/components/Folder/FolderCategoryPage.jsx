import CategoryTitleContainer from './CategoryTitleContainer';
import styled from 'styled-components';

function FolderCategoryPage() {
  return (
    <FolderCategoryPageStyle>
      <CategoryTitleContainer />
    </FolderCategoryPageStyle>
  );
}

export default FolderCategoryPage;

const FolderCategoryPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
`;
