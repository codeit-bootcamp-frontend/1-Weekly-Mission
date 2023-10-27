import styled from 'styled-components';
import addIcon from '../assets/add_icon.svg'

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

const Button = styled.button`
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--primary);
  background: var(--white);
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
  return (
    <SortingContainer>
      <ButtonContainer>
        <Button>전체</Button>
        <Button>⭐️ 즐겨찾기</Button>
        <Button>코딩 팁</Button>
        <Button>채용 사이트</Button>
        <Button>유용한 글</Button>
        <Button>나만의 장소</Button>
      </ButtonContainer>
      <FolderAdd>
        <p>폴더 추가</p>
        <AddIcon src={addIcon}></AddIcon>
      </FolderAdd>
    </SortingContainer>
  )
}

export default Sorting;