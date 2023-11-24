import * as Modal from '../Modal.style';

function DeleteLink({ url }) {
  return (
    <>
      <Modal.Header>
        <Modal.Title>링크 삭제</Modal.Title>
        <Modal.Description>{url}</Modal.Description>
      </Modal.Header>
      <Modal.DeleteButton>삭제하기</Modal.DeleteButton>
    </>
  );
}

export default DeleteLink;
