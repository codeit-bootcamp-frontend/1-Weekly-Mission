import * as S from './Modal.style';

interface Props {
  url: string;
}

function ModalDeleteLink({ url }: Props) {
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
