import * as S from "./Modal.style";

function ModalAddFolder() {
  return (
    <>
      <S.TitleContainer>
        <S.Title>폴더 추가</S.Title>
      </S.TitleContainer>
      <S.Form>
        <S.Input placeholder="내용 입력" />
        <S.SubmitButton>추가하기</S.SubmitButton>
      </S.Form>
    </>
  );
}

export default ModalAddFolder;
