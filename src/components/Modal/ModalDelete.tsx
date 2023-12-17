import * as S from './Modal.style';

interface Props {
  folderName: string;
}

const ModalDelete = ({ folderName }: Props) => {
  return (
    <>
      <S.TitleContainer>
        <S.Title>폴더 삭제</S.Title>
        <S.Subtitle>{folderName}</S.Subtitle>
      </S.TitleContainer>
      <S.DeleteButton>삭제하기</S.DeleteButton>
    </>
  );
};

export default ModalDelete;
