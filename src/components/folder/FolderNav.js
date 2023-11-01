import styled from 'styled-components';
import { ALL_ID } from '../../constants/default';

const selectFolderStyle = {
  color: 'white',
  backgroundColor: 'var(--primary-color)',
};

function FolderNav({ folders, selectedFolderId, onChangeFolder, onChangeFolderAll }) {
  return (
    <FolderList>
      <FolderItem style={selectedFolderId === ALL_ID ? selectFolderStyle : null} onClick={onChangeFolderAll}>
        전체
      </FolderItem>
      {folders.map((folder) => (
        <FolderListItem style={folder.id === selectedFolderId ? selectFolderStyle : null} key={folder.id} folder={folder} onChangeFolder={onChangeFolder} />
      ))}
    </FolderList>
  );
}

function FolderListItem({ folder, onChangeFolder, style }) {
  function handleFolderClick() {
    onChangeFolder(folder.id);
  }

  return (
    <FolderItem style={style} key={folder.id} onClick={handleFolderClick}>
      {folder.name}
    </FolderItem>
  );
}

export default FolderNav;

const FolderList = styled.ul`
  width: 900px;
  padding: 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 6px;
  @media (max-width: 1124px) {
    width: 620px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const FolderItem = styled.li`
  display: inline;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  list-style: none;
  font-size: 1.6rem;
  font-weight: 400;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: var(--primary-color);
  }
`;
