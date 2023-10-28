import styled from 'styled-components';
import LinkSearchInput from './LinkSearchInput';
import CardList from './CardList';
import shareIcon from '../assets/share_icon.svg';
import penIcon from '../assets/pen_icon.svg';
import deleteIcon from '../assets/delete_icon.svg';
import Sorting from './Sorting';
import Option from './Option';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-top: 2.4rem;
  width: 100%;

  @media (max-width: 1124px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 779px) {
    padding: 0 3.2rem;
    gap: 3.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.div`
  display: flex;
  width: 1060px;
  height: 2.9rem;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: -0.02rem;
  }
`

const Options = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`

const FolderMain = ( {folderInfo, selectedFolder} ) => {
  return (
    <MainContainer>
      <LinkSearchInput />
      <Sorting selectedFolder={selectedFolder}/>
      <Title>
        <h1>유용한 글</h1>
        <Options>
          <Option icon={shareIcon}>공유</Option>
          <Option icon={penIcon}>이름 변경</Option>
          <Option icon={deleteIcon}>삭제</Option>
        </Options>
      </Title>
      <CardList folderCards={folderInfo}/>
    </MainContainer>
  )
}

export default FolderMain;