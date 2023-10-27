import styled from 'styled-components';
import addImg from '../assets/images/add.svg';
import { useState } from 'react';
import '../styles/FolderList.css';

const AddFoler = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--linkbrary-primary-color);
  flex-shrink: 0;
  height: 35px;
  margin-left: 12px;
`;

const Box = styled.div`
  display: flex;
  max-width: 1060px;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: ${({ color }) =>
    color === 'true'
      ? 'var(--linkbrary-primary-color)'
      : 'var(--linkbrary-white)'};
  color: ${({ color }) =>
    color === 'true' ? 'var(--linkbrary-white)' : 'black'};
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
`;

const ALL = {
  name: '전체',
};

const Folder = ({ folderInfo, color, onClick }) => {
  return (
    <Button color={color} onClick={onClick} id={folderInfo.id}>
      {folderInfo.name}
    </Button>
  );
};

export default function FolderList({ userFolder, onCurrentFolderId }) {
  const [currentButton, setCurrentButton] = useState('');
  const handleFolder = (e) => {
    const id = e.target.id;
    if (id === currentButton) {
      setCurrentButton('');
      onCurrentFolderId('');
    } else {
      setCurrentButton(id);
      onCurrentFolderId(id);
    }
  };

  return (
    <Box>
      <FolderBox>
        <Folder
          folderInfo={ALL}
          key='전체'
          color={`${currentButton === ''}`}
          onClick={handleFolder}
          id=''
        />
        {userFolder.map((folder) => (
          <Folder
            folderInfo={folder}
            key={folder.id}
            onClick={handleFolder}
            color={`${currentButton === String(folder.id)}`}
          />
        ))}
      </FolderBox>
      <AddFoler>
        <div>폴더추가</div>
        <img src={addImg} alt='폴더추가' />
      </AddFoler>
    </Box>
  );
}
