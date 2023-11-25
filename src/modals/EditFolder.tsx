import styles from "./AddFolder.module.css";
import ModalHeader from "../components/ModalHeader/ModalHeader";
import InputBox from "../components/InputBox/InputBox";
import Button from "../components/Button/Button";
import { ChangeEvent, ReactNode } from "react";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: ReactNode;
}

function EditFolder({ onChange, children, value }: Props) {
  return (
    <>
      <ModalHeader title="폴더 이름 변경" subTitle={children}></ModalHeader>
      <div className={styles.body}>
        <form className={styles.form} onSubmit={() => {}} noValidate>
          <InputBox>
            <input value={value} className={styles.input} placeholder="내용 입력" onChange={onChange} />
          </InputBox>
          <Button>변경하기</Button>
        </form>
      </div>
    </>
  );
}

export default EditFolder;
