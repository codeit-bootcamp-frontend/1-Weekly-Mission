import { ChangeEvent, useState } from "react";

import styles from "./EditFolderNameModal.module.css";

import ModalButton from "../ModalButton/ModalButton";
import ModalTitle from "../ModalTitle/ModalTitle";

interface Props {
  currentFolderName: string;
}

const EditFolderNameModal = ({ currentFolderName }: Props) => {
  const [inputValue, setInputValue] = useState(currentFolderName);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <ModalTitle>폴더 이름 변경</ModalTitle>
      <div className={styles.container}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="내용 입력"
        />
        <ModalButton color="blue">변경하기</ModalButton>
      </div>
    </>
  );
};

export default EditFolderNameModal;
