import styles from "./AddLinkInput.module.css";
import Button from "../Button/Button";
import { ChangeEvent, Dispatch, FormEvent, MouseEvent, SetStateAction } from "react";
import Image from "next/image";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onSubmit: (e: FormEvent) => void;
  setTarget: Dispatch<SetStateAction<string | null | undefined>>;
}

function AddLinkInput({ onChange, value, onSubmit, setTarget }: Props) {
  const handleSubmit = (e: FormEvent) => {
    onSubmit(e);
    setTarget("AddLinkToFolderFromInput");
  };

  return (
    <header className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image fill src="/images/icon/common-icons/link.svg" alt="" />
          </div>
          <input
            onChange={onChange}
            id="search"
            value={value}
            className={styles.input}
            placeholder="링크를 추가해 보세요"
          ></input>
          <Button className={styles.button}>추가하기</Button>
        </div>
      </form>
    </header>
  );
}

export default AddLinkInput;
