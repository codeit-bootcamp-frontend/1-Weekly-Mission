import styled from 'styled-components';

const FolderTitleStyle = styled.div`
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
`;

function FolderTitle({ folders, selectedFolderId }) {
  const folderData = folders.data;

  let selectedFolder = folderData.find((folder) => selectedFolderId === folder.id);
  const title = selectedFolderId === -1 ? '전체' : selectedFolder.name;

  return <FolderTitleStyle>{title}</FolderTitleStyle>;
}

export default FolderTitle;
