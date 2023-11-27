import { ModalButton, SubTitle } from './ModalStyle';

interface Props {
  currentFolder: {
    name: number;
  };
}

export default function DeleteModal({ currentFolder }: Props) {
  return (
    <>
      <SubTitle>{currentFolder.name}</SubTitle>
      <ModalButton type='삭제하기' buttonColor='red'></ModalButton>
    </>
  );
}
