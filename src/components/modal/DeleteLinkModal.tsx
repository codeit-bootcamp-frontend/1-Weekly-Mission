import { ModalButton, SubTitle } from './ModalStyle';

interface Props {
  link: string;
}

export default function DeleteLinkModal({ link }: Props) {
  return (
    <>
      <SubTitle>{link}</SubTitle>
      <ModalButton type='삭제하기' buttonColor='red'></ModalButton>
    </>
  );
}
