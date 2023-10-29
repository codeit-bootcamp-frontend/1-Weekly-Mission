import styled from 'styled-components';
import add_icon from '../assets/svg/add.svg';

function FloatingActionButton() {

  return (
    <FolderActionButton>
      <ActionName>폴더 추가</ActionName>
      <ActionIcon src={add_icon} alt='폴더 추가 아이콘'/>
    </FolderActionButton>
  );
}

const FolderActionButton = styled.button`
  display: flex;
  padding: 0.8rem 2.4rem;
  align-items: center;
  gap: 0.4rem;
  position: absolute;
  z-index: 1;
  bottom: 10.1rem;
  border-radius: 20px;
  border: 1px solid #fff;
  background: #6d6afe;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const ActionName = styled.p`
  display: flex;
  align-items: center;
  color: #e7effb;
  text-align: center;
  font-family: Pretendard, sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const ActionIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`

export default FloatingActionButton;
