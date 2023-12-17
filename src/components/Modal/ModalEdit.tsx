import * as S from './Modal.style';

interface Props {
  folderName: string;
}

const ModalEdit = ({ folderName }: Props) => {
  return (
    <>
      <S.TitleContainer>
        <S.Title>폴더 이름 변경</S.Title>
      </S.TitleContainer>
      <S.Form>
        <S.Input placeholder={folderName} />
        <S.SubmitButton>변경하기</S.SubmitButton>
      </S.Form>
    </>
  );
};

export default ModalEdit;
