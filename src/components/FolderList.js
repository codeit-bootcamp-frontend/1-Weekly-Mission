import styled from 'styled-components';
import addImg from '../assets/images/add.svg';
import { useState } from 'react';

const AddFoler = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--linkbrary-primary-color);
  flex-shrink: 0;
  height: 35px;
  @media (max-width: 767px) {
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translateX(-50%);
    padding: 9px 24px;
    background-color: var(--linkbrary-primary-color);
    border-radius: 20px;
    color: var(--linkbrary-white);
    z-index: 3;
  }
`;

const AddImg = styled.img`
  position: relative;
  top: -1px;
  @media (max-width: 767px) {
    filter: brightness(0) invert(1);
  }
`;

const Box = styled.div`
  display: flex;
  max-width: 1060px;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: ${({ $select }) =>
    $select === 'true'
      ? 'var(--linkbrary-primary-color)'
      : 'var(--linkbrary-white)'};
  color: ${({ $select }) =>
    $select === 'true' ? 'var(--linkbrary-white)' : 'black'};
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

const ALL = {
  name: '전체',
};

const Folder = ({ folderInfo, $select, onClick }) => {
  return (
    <Button $select={$select} onClick={onClick} id={folderInfo.id}>
      {folderInfo.name}
    </Button>
  );
};

export default function FolderList({ userFolder, onCurrentFolder }) {
  const [currentButton, setCurrentButton] = useState('');
  const handleFolder = (e) => {
    const id = e.target.id;
    const name = e.target.innerHTML;
    if (id === currentButton) {
      setCurrentButton({ name: '전체', id: '' });
      onCurrentFolder({ name: '전체', id: '' });
    } else {
      setCurrentButton({ name, id });
      onCurrentFolder({ name, id });
    }
  };

  return (
    <Box>
      <FolderBox>
        <Folder
          folderInfo={ALL}
          key='전체'
          $select={`${currentButton === ''}`}
          onClick={handleFolder}
          id=''
        />
        {userFolder.map((folder) => (
          <Folder
            folderInfo={folder}
            key={folder.id}
            onClick={handleFolder}
            $select={`${currentButton === String(folder.id)}`}
          />
        ))}
      </FolderBox>
      <AddFoler>
        <div>폴더추가</div>
        <AddImg src={addImg} alt='폴더추가' />
      </AddFoler>
    </Box>
  );
}
