import styled from 'styled-components';
import addButton from 'assets/images/add.svg';
import addMobileButton from 'assets/images/add_mobile.svg';
import useGetWindowWidth from 'hooks/useGetWindowWidth';

function AddFolderBtn() {
  const innerWidth = useGetWindowWidth();

  return (
    <Container>
      <AddFolder>폴더 추가</AddFolder>
      <img src={innerWidth < 768 ? addMobileButton : addButton} alt="폴더 추가 버튼" />
    </Container>
  );
}

export default AddFolderBtn;

const Container = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    z-index: 10;
    position: fixed;
    bottom: 101px;
    left: 50%;
    transform: translate(-50%, 0%);
    padding: 8px 24px;
    width: 128px;
    border-radius: 20px;
    background-color: var(--primary-color);
    &:hover {
      cursor: pointer;
    }
  }
`;

const AddFolder = styled.p`
  margin: 0 0;
  color: var(--primary-color);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.3px;
  display: inline;
  @media (max-width: 767px) {
    color: #e7effb;
  }
`;
