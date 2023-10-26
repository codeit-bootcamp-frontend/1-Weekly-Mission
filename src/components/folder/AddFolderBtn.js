import styled from 'styled-components';
import addButton from '../../assets/images/add.svg';

const Container = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddFolder = styled.p`
  margin: 0 0;
  color: var(--primary-color);
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.3px;
  display: inline;
`;

function AddFolderBtn() {
  return (
    <Container>
      <AddFolder>폴더 추가</AddFolder>
      <img src={addButton} alt="폴더 추가 버튼" />
    </Container>
  );
}

export default AddFolderBtn;
