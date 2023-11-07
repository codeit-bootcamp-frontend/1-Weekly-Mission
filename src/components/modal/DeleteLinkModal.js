import { ModalButton, SubTitle } from './ModalStyle';

export default function DeleteLinkModal({ link }) {
  return (
    <>
      <SubTitle>{link}</SubTitle>
      <ModalButton type='삭제하기' buttonColor='red'></ModalButton>
    </>
  );
}
