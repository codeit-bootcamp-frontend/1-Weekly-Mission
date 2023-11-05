import styled from 'styled-components';

function SelectMenu() {
 return (
   <SelectMenuContainer>
     <DeleteButton>삭제하기</DeleteButton>
     <AddButton>폴더에 추가</AddButton>
   </SelectMenuContainer>
 )
}

export default SelectMenu;

const SelectMenuContainer = styled.div`
  position: absolute;
  z-index: 3;
  right: -58px;
  top: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  background: #FFF;
  box-shadow: 0 2px 8px 0 rgba(51, 50, 54, 0.10);
  width: 10rem;
  height: 6.4rem;
`;

const SelectButton = styled.button`
  display: flex;
  padding: 0.7px 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
  color: #333236;
  font-family: Pretendard, sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 100%;
`

const DeleteButton = styled(SelectButton)`
`

const AddButton = styled(SelectButton)`
  background: #E7EFFB;
  color: #6D6AFE;
`;
