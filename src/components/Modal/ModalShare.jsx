import styled from "styled-components";
import * as Styled from "./StyledModal";

const StyledShareFolderName = styled(Styled.ModalLabel)`
  font-size: 1.2rem;
  color: var(--gray20);
  margin-top: -10px;
`;

const ModalShare = ({ modalClose }) => {
  return (
    <Styled.ModalBackground>
      <Styled.Modal>
        <Styled.ModalLabel>폴더 공유</Styled.ModalLabel>
        <StyledShareFolderName>폴더명</StyledShareFolderName>
        <Styled.ModalSnsContainer>
          <Styled.ModalSnsBox>
            <Styled.ModalSnsImg share="kakao" />
            카카오톡
          </Styled.ModalSnsBox>
          <Styled.ModalSnsBox>
            <Styled.ModalSnsImg share="facebook" />
            페이스북
          </Styled.ModalSnsBox>
          <Styled.ModalSnsBox>
            <Styled.ModalSnsImg share="link" />
            링크 복사
          </Styled.ModalSnsBox>
        </Styled.ModalSnsContainer>
        <Styled.ModalCloseBtn onClick={modalClose} />
      </Styled.Modal>
    </Styled.ModalBackground>
  );
};

export default ModalShare;
