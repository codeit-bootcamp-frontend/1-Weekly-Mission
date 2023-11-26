import styles from "./AddFolderModal.module.css";
import ModalButton from "./ModalButton";
import ModalTitle from "./ModalTitle";

const AddFolderModal = () => {
  return (
    <>
      <ModalTitle>폴더 추가</ModalTitle>
      <div className={styles.container}>
        <input className={styles.input} placeholder="내용 입력" />
        <ModalButton color="blue">추가하기</ModalButton>
      </div>
    </>
  );
};

export default AddFolderModal;
