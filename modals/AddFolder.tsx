import styles from "./AddFolder.module.css";
import Button from "../components/Button/Button";
import { ChangeEvent, ReactNode } from "react";
import ModalHeader from "./ModalHeader/ModalHeader";
import Input from "@/components/Input/Input";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function AddFolder({ onChange, value }: Props) {
  return (
    <>
      <ModalHeader title="폴더 추가"></ModalHeader>
      <div className={styles.body}>
        <form className={styles.form} onSubmit={() => {}} noValidate>
          <Input eyeButton={false} value={value} className={styles.input} placeholder="내용 입력" onChange={onChange} />
          <Button>추가하기</Button>
        </form>
      </div>
    </>
  );
}

export default AddFolder;
