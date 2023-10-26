import styled from 'styled-components';

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

const selectFolderStyle = {
  color: 'white',
  backgroundColor: 'var(--primary-color)',
};

function FolderNav({ folders, selectedFolderId, onChangeFolder, onChangeFolderAll }) {
  const folderData = folders.data;
  return (
    <FolderList>
      <FolderItem style={selectedFolderId === -1 ? selectFolderStyle : null} onClick={onChangeFolderAll}>
        전체
      </FolderItem>
      {folderData.map((folder) => {
        const selectedStyle = folder.id === selectedFolderId ? selectFolderStyle : null;
        return <FolderListItem style={selectedStyle} key={folder.id} folder={folder} onChangeFolder={onChangeFolder} />;
      })}
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
