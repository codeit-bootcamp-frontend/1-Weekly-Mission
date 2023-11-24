import { ModalContentName } from "components";
import ModalPortal from "Portal";
import * as Styled from "./StyledModal";

const ShareModal = ({ closeModal }) => {
  return (
    <ModalPortal>
      <Styled.ModalBackground onClick={closeModal} />
      <Styled.Container>
        <Styled.ModalLabel>폴더 공유</Styled.ModalLabel>
        <ModalContentName>폴더명</ModalContentName>
        <Styled.ModalSnsContainer>
          <Styled.ModalSnsBox>
            <Styled.ModalSnsImg $share="kakao" />
            카카오톡
          </Styled.ModalSnsBox>
          <Styled.ModalSnsBox>
            <Styled.ModalSnsImg $share="facebook" />
            페이스북
          </Styled.ModalSnsBox>
          <Styled.ModalSnsBox>
            <Styled.ModalSnsImg $share="link" />
            링크 복사
          </Styled.ModalSnsBox>
        </Styled.ModalSnsContainer>
        <Styled.ModalCloseBtn onClick={closeModal} />
      </Styled.Container>
    </ModalPortal>
  );
};

export default ShareModal;
