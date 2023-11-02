import styled from 'styled-components';
import { useState } from 'react';
import SortingButton from '../../UI/SortingButton';
import FolderAdd from './FolderAdd';

function Sorting({ selectedFolder, changeTitle }) {
  const [activeFolderId, setActiveFolderId] = useState(selectedFolder[0].id);

  const handleClick = (folder) => {
    setActiveFolderId(folder.id);
    changeTitle(folder.name);
  };

  return (
    <Container>
      <ButtonArea>
        {selectedFolder.map((folder, index) => (
          <SortingButton
            key={index}
            folderId={folder.id}
            createdAt={folder.created_at}
            isActive={activeFolderId === folder.id}
            handleClick={() => handleClick(folder)}
            buttonIndex={index}
          >
            {folder.name}
          </SortingButton>
        ))}
      </ButtonArea>
      <FolderAdd />
    </Container>
  );
}

export default Sorting;

const Container = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    width: calc(100vw - 6.4rem);
    align-items: flex-start;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  flex-wrap: wrap;
`;
