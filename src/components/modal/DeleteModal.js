import { ModalButton, SubTitle } from './ModalStyle';

export default function DeleteModal({ currentFolder }) {
  return (
    <>
      <SubTitle>{currentFolder.name}</SubTitle>
      <ModalButton type='삭제하기' buttonColor='red'></ModalButton>
    </>
  );
}
