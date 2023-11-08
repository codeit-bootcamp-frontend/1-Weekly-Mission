import * as S from "./Modal.style";

function ModalDeleteLink({ url }) {
  return (
    <>
      <S.TitleContainer>
        <S.Title>링크 삭제</S.Title>
        <S.Subtitle>{url}</S.Subtitle>
      </S.TitleContainer>
      <S.DeleteButton>삭제하기</S.DeleteButton>
    </>
  );
}

export default ModalDeleteLink;
