import * as S from "components/js/modals/modal-styles/ModalsUnits";
import ModalBg from "./modal-styles/ModalBg";

function FolderShareModal({ IconList, ...props }) {
  return (
    <>
      <ModalBg>
        <S.Wrapper>
          <S.CloseButton />
          <S.TitleWrapper>
            <S.ModalTitle>폴더 공유</S.ModalTitle>
            <S.ModalContents>폴더명</S.ModalContents>
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
