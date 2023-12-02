import styles from "./AddFolder.module.css";
import Button from "../components/Button/Button";
import { ChangeEvent, ReactNode } from "react";
import Input from "@/components/Input/Input";
import ModalHeader from "./ModalHeader/ModalHeader";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

function EditFolder({ onChange, value }: Props) {
  return (
    <>
      <ModalHeader title="폴더 이름 변경"></ModalHeader>
      <div className={styles.body}>
        <form className={styles.form} onSubmit={() => {}} noValidate>
          <Input value={value} className={styles.input} placeholder="내용 입력" eyeButton={false} onChange={onChange} />
          <Button>변경하기</Button>
        </form>
      </div>
    </>
  );
}

export default EditFolder;
