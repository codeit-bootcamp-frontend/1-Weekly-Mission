import { ModalButton, SubTitle } from './ModalStyle';

export default function DeleteLinkModal({ currentFolder, link }) {
  return (
    <>
      <SubTitle>{link}</SubTitle>
      <ModalButton type='삭제하기' buttonColor='red'></ModalButton>
    </>
  );
}
