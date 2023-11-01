import * as Styled from "./StyledFolderLists";

const EditTool = ({ children, kind }) => {
  return (
    <Styled.EditFolderBtn>
      <Styled.EditFolderImg kind={kind} />
      <Styled.EditFolderText>{children}</Styled.EditFolderText>
    </Styled.EditFolderBtn>
  );
};

const EditFolderTools = () => {
  return (
    <Styled.ToolBox id="toolbox">
      <EditTool kind="share">공유</EditTool>
      <EditTool kind="change">이름 변경</EditTool>
      <EditTool kind="delete">삭제</EditTool>
    </Styled.ToolBox>
  );
};

export default EditFolderTools;
