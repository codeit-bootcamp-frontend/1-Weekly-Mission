import * as S from "./modal-styles/ModalsUnits";
import ModalBg from "./modal-styles/ModalBg";
import kakaotalk from "../../../Assets/kakaotalk.svg";
import facebookIcon from "../../../Assets/facebook.svg";
import linkShare from "../../../Assets/linkShare.svg";

function FolderShareModal({ onClose, folderName, copy, kakao, facebook }: any) {
  return (
    <>
      <ModalBg>
        <S.Wrapper>
          <S.CloseButton onClick={onClose} />
          <S.TitleWrapper>
            <S.ModalTitle>폴더 공유</S.ModalTitle>
            <S.ModalContents>{folderName}</S.ModalContents>
          </S.TitleWrapper>
          <S.IconWrapper>
            <S.IconContainer>
              <S.IconButton onClick={kakao}>
                <S.SNSIcon src={kakaotalk} />
              </S.IconButton>
              <S.IconName>카카오톡</S.IconName>
            </S.IconContainer>
            <S.IconContainer>
              <S.IconButton onClick={facebook}>
                <S.SNSIcon src={facebookIcon} />
              </S.IconButton>
              <S.IconName>페이스북</S.IconName>
            </S.IconContainer>
            <S.IconContainer>
              <S.IconButton>
                <S.SNSIcon src={linkShare} onClick={copy} />
              </S.IconButton>
              <S.IconName>링크 공유</S.IconName>
            </S.IconContainer>
          </S.IconWrapper>
        </S.Wrapper>
      </ModalBg>
    </>
  );
}

export default FolderShareModal;
