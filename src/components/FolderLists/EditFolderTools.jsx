import * as Styled from "./StyledFolderLists";

const EditTool = ({ children, kind, onClick }) => {
  return (
    <Styled.EditFolderBtn onClick={onClick}>
      <Styled.EditFolderImg $kind={kind} />
      <Styled.EditFolderText>{children}</Styled.EditFolderText>
    </Styled.EditFolderBtn>
  );
};

const EditFolderTools = ({ modalOpen }) => {
  const [openShare, openDelete, openChange] = modalOpen;
  return (
    <Styled.ToolBox id="toolbox">
      <EditTool onClick={openShare} kind="share">
        공유
      </EditTool>
      <EditTool onClick={openChange} kind="change">
        이름 변경
      </EditTool>
      <EditTool onClick={openDelete} kind="delete">
        삭제
      </EditTool>
    </Styled.ToolBox>
  );
};

export default EditFolderTools;
