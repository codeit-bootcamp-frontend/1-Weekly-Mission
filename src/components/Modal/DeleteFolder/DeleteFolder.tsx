import * as Modal from '../Modal.style';

function DeleteFolder({ folderName }) {
  return (
    <>
      <Modal.Header>
        <Modal.Title>폴더 삭제</Modal.Title>
        <Modal.Description>{folderName}</Modal.Description>
      </Modal.Header>
      <Modal.DeleteButton>삭제하기</Modal.DeleteButton>
    </>
  );
}

export default DeleteFolder;
