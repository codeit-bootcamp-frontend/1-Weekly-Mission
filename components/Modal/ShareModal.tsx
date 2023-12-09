import { MouseEvent } from "react";
import { ModalContentName } from "@/components";
import ModalPortal from "@/lib/utils/Portal";
import * as Styled from "./Modal.styled";

type closeModal = (e: MouseEvent) => void;

interface Props {
  closeModal: closeModal;
}

const ShareModal = ({ closeModal }: Props) => {
  const scrollY = window.scrollY;

  return (
    <ModalPortal>
      <Styled.ModalBackground
        $scrollY={scrollY}
        onClick={closeModal}
        $back="BG"
      />
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
