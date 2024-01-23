import { ChangeEvent, FormEvent, ReactNode, useState } from "react";

import styles from "./AddLinkInput.module.css";

import chainIcon from "../../assets/images/chain.svg";
import Image from "next/image";
import classNames from "classnames";
import isValidURL from "@/utils/isValidURL";
import AddLinkButton from "./AddLinkButton";
import { UserFolders } from "@/@types/folder.types";

interface Props {
  folderData?: UserFolders[];
  inputValue: string;
  onChange: (value: string) => void;
}

function AddLinkInput({ folderData, inputValue, onChange }: Props) {
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
    setError(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidURL(inputValue) || !(folderData && folderData.length > 0)) {
      setError(true);
    }
  };

  return (
    <form className={styles.addLinkInput} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
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
      </div>
      {error && (
        <div className={styles.error}>URL 형식에 맞게 입력해주세요.</div>
      )}
      {error && (!folderData || folderData.length === 0) && (
        <div className={styles.error}>폴더를 먼저 생성해 주세요.</div>
      )}
      <AddLinkButton inputValue={inputValue} folderListData={folderData} />
    </form>
  );
}

export default AddLinkInput;
