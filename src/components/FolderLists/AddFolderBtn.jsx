import * as Styled from "./StyledFolderLists";

const AddFolderBtn = ({ modalOpen }) => {
  return (
    <Styled.AddFolderBtn onClick={modalOpen}>
      <Styled.AddFolderText>폴더 추가</Styled.AddFolderText>
      <Styled.AddFolderImg />
    </Styled.AddFolderBtn>
  );
};

export default AddFolderBtn;
