import styled from 'styled-components';
import FAB from '../../UI/FAB';
import addIcon from '../../../assets/add_icon.svg';
import addIconWhite from '../../../assets/add_icon_white.svg';

function FolderAdd() {
  const addText = '폴더 추가';

  return (
    <>
      <Button>
        <p>{addText}</p>
        <AddIcon src={addIcon}></AddIcon>
      </Button>
      <FAB src={addIconWhite}>{addText}</FAB>
    </>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1.2rem;
  flex-shrink: 0;

  p {
    color: var(--primary);
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  }

  @media (max-width: 779px) {
    display: none;
  }
`;

const AddIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export default FolderAdd;
