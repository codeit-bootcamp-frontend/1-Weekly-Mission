import ModalTextInput from "../../components/TextInputs/ModalTextInput";
import BlueGradationBtn from "../../components/Buttons/BlueGradationBtn";
import { TitleText, Content } from "../ModalCommonStyles";
import ModalContainer from "../ModalContainer";
import { IModalContentsProps } from "./types/modalContents.types";

function AddFolder({ isOpen, changeOpenState }: IModalContentsProps) {
  return (
    <ModalContainer isOpen={isOpen} onClick={changeOpenState}>
      <Content>
        <TitleText>폴더 추가</TitleText>
        <div>
          <ModalTextInput>내용 입력</ModalTextInput>
          <BlueGradationBtn width="280px" margin="15px 0 0 0">
            추가하기
          </BlueGradationBtn>
        </div>
      </Content>
    </ModalContainer>
  );
}

export default AddFolder;
