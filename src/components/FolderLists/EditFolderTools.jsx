import * as Styled from "./StyledFolderLists";

const EditTool = ({ children, kind, onClick }) => {
  return (
    <Styled.EditFolderBtn onClick={onClick}>
      <Styled.EditFolderImg kind={kind} />
      <Styled.EditFolderText>{children}</Styled.EditFolderText>
    </Styled.EditFolderBtn>
  );
};

const EditFolderTools = ({ modalOpen }) => {
  const [shareModalOpen, editModalOpen, deleteModalOpen] = modalOpen;
  return (
    <Styled.ToolBox id="toolbox">
      <EditTool onClick={shareModalOpen} kind="share">
        공유
      </EditTool>
      <EditTool onClick={editModalOpen} kind="change">
        이름 변경
      </EditTool>
      <EditTool onClick={deleteModalOpen} kind="delete">
        삭제
      </EditTool>
    </Styled.ToolBox>
  );
};

export default EditFolderTools;
