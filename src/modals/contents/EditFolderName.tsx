import ModalTextInput from "../../components/TextInputs/ModalTextInput";
import BlueGradationBtn from "../../components/StyledButtons/BlueGradationBtn";
import { TitleText, Content } from "../ModalCommonStyles";
import ModalContainer from "../ModalContainer";
import { IModalContentsProps } from "./types/modalContents.types";

function EditFolderName({
  isOpen,
  changeOpenState,
  folderTagName,
}: IModalContentsProps) {
  return (
    <ModalContainer isOpen={isOpen} onClick={changeOpenState}>
      <Content>
        <TitleText>폴더 이름 변경</TitleText>
        <div>
          <ModalTextInput>{folderTagName}</ModalTextInput>
          <BlueGradationBtn width="280px" margin="15px 0 0 0">
            변경하기
          </BlueGradationBtn>
        </div>
      </Content>
    </ModalContainer>
  );
}

export default EditFolderName;
