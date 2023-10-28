import styled from 'styled-components';
import addIcon from '../assets/add_icon.svg'
import SortingButton from './SortingButton';
import { useState } from 'react';

const SortingContainer = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`

const FolderAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

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

const Sorting = () => {

  const buttonsContent = ['전체', '⭐️ 즐겨찾기', '코딩 팁', '채용 사이트', '유용한 글', '나만의 장소'];
  let isActiveArray = Array(buttonsContent.length).fill(false)
  isActiveArray[0] = true;

  const [isActive, setIsActive] = useState(isActiveArray);

  const handleClick = (index) => {
    isActiveArray = Array(buttonsContent.length).fill(false);
    isActiveArray[index] = true;
    setIsActive(isActiveArray);
  }

  return (
    <SortingContainer>
      <ButtonContainer >
        {buttonsContent.map((children, index) => {
          return (
            <SortingButton 
              key={index}
              isActive = {isActive[index]}
              handleClick={handleClick}
              buttonIndex={index}
            >{children}</SortingButton>
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