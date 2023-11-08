import { DescriptionText } from "../ModalCommonStyles";
import { TitleText, Content } from "../ModalCommonStyles";
import RedWarningBtn from "../../components/StyledButtons/RedWarningBtn";
import ModalContainer from "../ModalContainer";

function DeleteLink({ isOpen, changeOpenState, link = "" }) {
  return (
    <ModalContainer isOpen={isOpen} onClick={changeOpenState}>
      <Content>
        <div>
          <TitleText>링크 삭제</TitleText>
          <DescriptionText margin="8px 0 0 0">{link}</DescriptionText>
        </div>
        <RedWarningBtn width="280px">삭제하기</RedWarningBtn>
      </Content>
    </ModalContainer>
  );
}

export default DeleteLink;
