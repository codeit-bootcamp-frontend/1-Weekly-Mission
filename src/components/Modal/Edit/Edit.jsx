import * as Modal from '../Modal.style';
import Layout from '../Layout';

function Edit({ closeModal }) {
  return (
    <Layout closeModal={closeModal}>
      <Modal.Title>폴더 이름 변경</Modal.Title>
      <div>
        <Modal.Input placeholder='유용한 팁'></Modal.Input>
        <Modal.BigButton>변경하기</Modal.BigButton>
      </div>
    </Layout>
  );
}

export default Edit;
