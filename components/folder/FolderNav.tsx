import styled from 'styled-components';
import { ALL_ID } from '@/constants/default';
import { FolderType } from '@/constants/dataType';

interface Props {
  folders: FolderType[];
  selectedFolderId: number;
  onChangeFolder: (id: number) => void;
  onChangeFolderAll: () => void;
}

/**
 * Folder 목록 Nav 컴포넌트
 */
function FolderNav({ folders, selectedFolderId, onChangeFolder, onChangeFolderAll }: Props) {
  return (
    <FolderList>
      <FolderItem style={selectedFolderId === ALL_ID ? selectFolderStyle : {}} onClick={onChangeFolderAll}>
        전체
      </FolderItem>
      {folders.map((folder) => (
        <FolderNavItem style={folder.id === selectedFolderId ? selectFolderStyle : {}} key={folder.id} folder={folder} onChangeFolder={onChangeFolder} />
      ))}
    </FolderList>
  );
}

interface ItemProps {
  folder: FolderType;
  onChangeFolder: (id: number) => void;
  style:
    | {}
    | {
        color: string;
        backgroundColor: string;
      };
}

/**
 * Folder Nav의 Item 컴포넌트
 */
function FolderNavItem({ folder, onChangeFolder, style }: ItemProps) {
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

const selectFolderStyle = {
  color: 'white',
  backgroundColor: 'var(--primary-color)',
};

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
