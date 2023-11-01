import styled from 'styled-components';
import { ALL_ID } from '../../constants/default';

function FolderTitle({ folders, selectedFolderId }) {
  let selectedFolder = folders.find((folder) => selectedFolderId === folder.id);
  const title = selectedFolderId === ALL_ID ? '전체' : selectedFolder.name;

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
