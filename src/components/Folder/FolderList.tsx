import styled from 'styled-components';
import { MouseEvent, useState } from 'react';
import AddFolder from './AddFolder';

const ALL = {
  name: '전체',
};

type onClick = (e: MouseEvent) => void;

interface Select {
  $select: boolean;
}

interface FolderProps extends Select {
  folderInfo: any;
  onClick: onClick;
  id?: string;
}

const Folder = ({ folderInfo, $select, onClick }: FolderProps) => {
  return (
    <Button $select={$select} onClick={onClick} id={folderInfo.id}>
      {folderInfo.name}
    </Button>
  );
};

export default function FolderList({
  userFolder,
  onCurrentFolder,
  onModalOpen,
  searchParams,
}: any) {
  const [currentButton, setCurrentButton] = useState<string>();
  searchParams.get('folderId');

  const handleFolder = (e: MouseEvent) => {
    const targetElement = e.target as HTMLElement;
    const id = targetElement.id;
    const name = targetElement.innerHTML;
    if (id === currentButton) {
      setCurrentButton('');
      onCurrentFolder({ name: '전체', id: '' });
    } else {
      setCurrentButton(id);
      onCurrentFolder({ name, id });
    }
  };

  return (
    <Box>
      <FolderBox>
        <Folder
          folderInfo={ALL}
          key='전체'
          $select={currentButton === ''}
          onClick={handleFolder}
          id=''
        />
        {userFolder.map((folder: FolderProps) => (
          <Folder
            folderInfo={folder}
            key={folder.id}
            onClick={handleFolder}
            $select={currentButton === String(folder.id)}
          />
        ))}
      </FolderBox>
      <AddFolder onModalOpen={onModalOpen} />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  max-width: 1060px;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
`;

const Button = styled.button<Select>`
  background-color: ${({ $select }) =>
    $select ? 'var(--linkbrary-primary-color)' : 'var(--linkbrary-white)'};
  color: ${({ $select }) => ($select ? 'var(--linkbrary-white)' : 'black')};
  border: 1px solid var(--linkbrary-primary-color);
  padding: 8px 12px;
  border-radius: 5px;
  line-height: 100%;
  display: flex;
  flex-shrink: 0;
  cursor: pointer;
`;

const FolderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-right: 12px;
`;
