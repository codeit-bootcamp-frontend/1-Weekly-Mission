import * as S from "components/js/modals/modal-styles/ModalsUnits";
import ModalBg from "./modal-styles/ModalBg";

function FolderShareModal({ IconList, onClose, folderName }) {
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
            {IconList &&
              IconList.map((icon, idx) => {
                return (
                  <S.IconContainer key={idx.toString()}>
                    <S.SNSIcon src={icon.src} />
                    <S.IconName>{icon.name}</S.IconName>
                  </S.IconContainer>
                );
              })}
          </S.IconWrapper>
        </S.Wrapper>
      </ModalBg>
    </>
  );
}

export default FolderShareModal;
