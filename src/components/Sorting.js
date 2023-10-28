import styled from 'styled-components';
import addIcon from '../assets/add_icon.svg'
import SortingButton from './SortingButton';
import { useState } from 'react';

const SortingContainer = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 1124px) {
    width: calc(100vw - 6.4rem);
    align-items: flex-start
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  flex-wrap: wrap;
`

const FolderAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1.2rem;
  flex-shrink: 0;

  p{
    color: var(--primary);
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  }
`

const AddIcon = styled.img`
  width: 16px;
  height: 16px;
`

const Sorting = ({ selectedFolder }) => {

  let isActiveArray = Array(selectedFolder.length).fill(false)
  isActiveArray[0] = true;

  const [isActive, setIsActive] = useState(isActiveArray);

  const handleClick = (index) => {
    isActiveArray = Array(selectedFolder.length).fill(false);
    isActiveArray[index] = true;
    setIsActive(isActiveArray);
  }

  return (
    <SortingContainer>
      <ButtonContainer >
        {selectedFolder.map((selectedFolder, index) => {
          return (
            <SortingButton 
              key={index}
              folderId = {selectedFolder.id}
              createdAt = {selectedFolder['created_at']}
              isActive = {isActive[index]}
              handleClick={() => handleClick(index)}
              buttonIndex={index}
            >{selectedFolder.name}</SortingButton>
          )
        })}
      </ButtonContainer>
      <FolderAdd>
        <p>폴더 추가</p>
        <AddIcon src={addIcon}></AddIcon>
      </FolderAdd>
    </SortingContainer>
  )
}

export default Sorting;