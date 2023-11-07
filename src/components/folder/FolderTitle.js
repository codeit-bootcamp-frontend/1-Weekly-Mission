import styled from 'styled-components';
import { findFolderTitle } from 'utils/handleFolderData';

function FolderTitle({ folders, selectedFolderId }) {
  const title = findFolderTitle(folders, selectedFolderId);

  return <FolderTitleStyle>{title}</FolderTitleStyle>;
}

export default FolderTitle;

const FolderTitleStyle = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
`;
