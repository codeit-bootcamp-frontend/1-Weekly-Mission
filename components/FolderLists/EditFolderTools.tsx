import { MouseEvent, ReactNode } from "react";
import * as Styled from "./FolderLists.styled";

type openModal = (e: MouseEvent) => void;

interface PropsSub {
  kind: string;
  onClick: openModal;
  children: ReactNode;
}

interface Props {
  modalOpen: openModal[];
}

const EditTool = ({ children, kind, onClick }: PropsSub) => {
  return (
    <Styled.EditFolderBtn onClick={onClick}>
      <Styled.EditFolderImg $kind={kind} />
      <Styled.EditFolderText>{children}</Styled.EditFolderText>
    </Styled.EditFolderBtn>
  );
};

const EditFolderTools = ({ modalOpen }: Props) => {
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
