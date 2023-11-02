import * as Modal from '../Modal.style';
import Layout from '../Layout';

function DeleteLink() {
  return (
    <Layout>
      <Modal.Header>
        <Modal.Title>링크 삭제</Modal.Title>
        <Modal.Description>www.link.com</Modal.Description>
      </Modal.Header>
      <Modal.DeleteButton>삭제하기</Modal.DeleteButton>
    </Layout>
  );
}

export default DeleteLink;
