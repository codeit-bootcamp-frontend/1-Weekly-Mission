import * as Modal from '../Modal.style';
import Layout from '../Layout';

function DeleteFolder({ closeModal, folderName }) {
  return (
    <Layout closeModal={closeModal}>
      <Modal.Header>
        <Modal.Title>폴더 삭제</Modal.Title>
        <Modal.Description>{folderName}</Modal.Description>
      </Modal.Header>
      <Modal.DeleteButton>삭제하기</Modal.DeleteButton>
    </Layout>
  );
}

export default DeleteFolder;
