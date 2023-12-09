import { MouseEvent } from "react";
import * as Styled from "./FolderLists.styled";

type openModal = (e: MouseEvent) => void;

interface Props {
  modalOpen: openModal;
}

const AddFolderBtn = ({ modalOpen }: Props) => {
  return (
    <Styled.AddFolderBtn onClick={modalOpen}>
      <Styled.AddFolderText>폴더 추가</Styled.AddFolderText>
      <Styled.AddFolderImg />
    </Styled.AddFolderBtn>
  );
};

export default AddFolderBtn;
