import * as Modal from '../Modal.style';
import Layout from '../Layout';

function NewFolder() {
  return (
    <Layout>
      <Modal.Title>폴더 추가</Modal.Title>
      <div>
        <Modal.Input placeholder='내용 입력'></Modal.Input>
        <Modal.BigButton>추가하기</Modal.BigButton>
      </div>
    </Layout>
  );
}

export default NewFolder;
