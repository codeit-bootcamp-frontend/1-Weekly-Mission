import styled, { css } from 'styled-components';
import { ALL_ID } from '@/lib/constants/default';
import { FolderData } from '@/lib/types/dataType';
import { DEVICE_SIZE } from '@/lib/styles/DeviceSize';

interface Props {
  folders: FolderData[];
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
      <FolderItem $selected={selectedFolderId === ALL_ID} onClick={onChangeFolderAll}>
        전체
      </FolderItem>
      {folders.map((folder) => (
        <FolderNavItem selected={folder.id === selectedFolderId} key={folder.id} folder={folder} onChangeFolder={onChangeFolder} />
      ))}
    </FolderList>
  );
}

interface ItemProps {
  folder: FolderData;
  onChangeFolder: (id: number) => void;
  selected: boolean;
}

/**
 * Folder Nav의 Item 컴포넌트
 */
function FolderNavItem({ folder, onChangeFolder, selected }: ItemProps) {
  function handleFolderClick() {
    onChangeFolder(folder.id);
  }

  return (
    <FolderItem $selected={selected} key={folder.id} onClick={handleFolderClick}>
      {folder.name}
    </FolderItem>
  );
}

export default FolderNav;

const selectFolderStyle = css`
  color: white;
  background-color: var(--primary-color);
`;

const FolderList = styled.ul`
  width: 900px;
  padding: 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 6px;
  @media (max-width: ${DEVICE_SIZE.tablet}) {
    width: 620px;
  }
  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 100%;
  }
`;

const FolderItem = styled.li<{ $selected: boolean }>`
  padding: 8px 12px;

  display: inline;

  border-radius: 5px;
  border: 1px solid var(--primary-color);

  list-style: none;
  font-size: 1.6rem;

  ${({ $selected }) => ($selected ? selectFolderStyle : null)};

  &:hover {
    cursor: pointer;
    background-color: ${({ $selected }) => ($selected ? null : 'var(--gray-10)')};
  }
`;
