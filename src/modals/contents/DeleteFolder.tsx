import { DescriptionText } from "../ModalCommonStyles";
import { TitleText, Content } from "../ModalCommonStyles";
import RedWarningBtn from "../../components/Buttons/RedWarningBtn";
import ModalContainer from "../ModalContainer";
import { IModalContentsProps } from "./types/modalContents.types";

function DeleteFolder({
  isOpen,
  changeOpenState,
  folderTagName,
}: IModalContentsProps) {
  return (
    <ModalContainer isOpen={isOpen} onClick={changeOpenState}>
      <Content>
        <div>
          <TitleText>폴더 삭제</TitleText>
          <DescriptionText margin="8px 0 0 0">{folderTagName}</DescriptionText>
        </div>
        <RedWarningBtn width="280px">삭제하기</RedWarningBtn>
      </Content>
    </ModalContainer>
  );
}

export default DeleteFolder;
