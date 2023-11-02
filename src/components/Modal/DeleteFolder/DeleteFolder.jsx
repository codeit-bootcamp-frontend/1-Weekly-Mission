import * as Modal from '../Modal.style';
import Layout from '../Layout';

function DeleteFolder() {
  return (
    <Layout>
      <Modal.Header>
        <Modal.Title>폴더 삭제</Modal.Title>
        <Modal.Description>폴더 명</Modal.Description>
      </Modal.Header>
      <Modal.DeleteButton>삭제하기</Modal.DeleteButton>
    </Layout>
  );
}

export default DeleteFolder;
