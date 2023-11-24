import * as Modal from '../Modal.style';

function NewFolder() {
  return (
    <>
      <Modal.Title>폴더 추가</Modal.Title>
      <div>
        <Modal.Input placeholder='내용 입력'></Modal.Input>
        <Modal.BigButton>추가하기</Modal.BigButton>
      </div>
    </>
  );
}

export default NewFolder;
