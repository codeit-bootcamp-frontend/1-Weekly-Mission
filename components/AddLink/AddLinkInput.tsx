import { ChangeEvent, FormEvent, ReactNode, useState } from "react";

import styles from "./AddLinkInput.module.css";

import chainIcon from "../../assets/images/chain.svg";
import Image from "next/image";
import classNames from "classnames";
import isValidURL from "@/utils/isValidUrl";

interface Props {
  inputValue: string;
  onChange: (value: string) => void;
  children?: ReactNode;
}

function AddLinkInput({ inputValue, onChange, children }: Props) {
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
    setError(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidURL(inputValue)) {
      setError(true);
      return;
    }
  };

  return (
    <form className={styles.addLinkInput} onSubmit={handleSubmit}>
      <Image
        className={styles.chain_icon}
        src={chainIcon}
        alt="돋보기 모양 아이콘"
      />
      <input
        className={classNames(styles.input, error ? styles.red : "")}
        name="addLink"
        placeholder="링크를 추가해 보세요"
        value={inputValue}
        onChange={handleChange}
      />
      {error && (
        <div className={styles.error}>URL 형식에 맞게 입력해주세요.</div>
      )}
      {children}
    </form>
  );
}

export default AddLinkInput;
