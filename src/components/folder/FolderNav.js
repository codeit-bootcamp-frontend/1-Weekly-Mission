import styled from 'styled-components';

const FolderList = styled.ul`
  padding: 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 6px;
`;

const FolderItem = styled.li`
  display: inline;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  list-style: none;
  font-size: 1.6rem;
  font-weight: 400;
`;

function FolderNav({ folders }) {
  const folderData = folders.data;
  console.log(folderData);
  return (
    <FolderList>
      <FolderItem>전체</FolderItem>
      {folderData.map((folder) => folder.name !== 'string' && <FolderItem key={folder.id}>{folder.name}</FolderItem>)}
    </FolderList>
  );
}

export default FolderNav;
