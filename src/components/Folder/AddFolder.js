import styled from 'styled-components';
import addImg from '../../assets/images/add.svg';

export default function AddFolder({ onModalOpen }) {
  return (
    <Container
      onClick={() => {
        onModalOpen('폴더 추가');
      }}
    >
      <div>폴더추가</div>
      <AddImg src={addImg} alt='폴더추가' />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--linkbrary-primary-color);
  flex-shrink: 0;
  height: 35px;
  cursor: pointer;
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
