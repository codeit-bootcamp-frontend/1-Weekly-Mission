import { ChangeEvent, FormEvent, ReactNode } from "react";

import styles from "./AddLinkInput.module.css";

import chainIcon from "../../assets/images/chain.svg";

interface Props {
  inputValue: string;
  onChange: (value: string) => void;
  children?: ReactNode;
}

const AddLinkInput = ({ inputValue, onChange, children }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.addLinkInput} onSubmit={handleSubmit}>
      <img
        className={styles.chain_icon}
        src={chainIcon}
        alt="돋보기 모양 아이콘"
      />
      <input
        className={styles.input}
        name="addLink"
        placeholder="링크를 추가해 보세요"
        value={inputValue}
        onChange={handleChange}
      />
      {children}
    </form>
  );
};

export default AddLinkInput;
