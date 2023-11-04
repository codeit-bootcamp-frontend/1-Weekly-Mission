import { DescriptionText } from "../ModalCommonStyles";
import { TitleText, Content } from "../ModalCommonStyles";
import RedWarningBtn from "../../components/StyledButtons/RedWarningBtn";
import ModalContainer from "../ModalContainer";

function DeleteFolder({ isOpen, changeOpenState, folderTagName }) {
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
