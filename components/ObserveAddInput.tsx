import Image from "next/image";
import React from "react";
import linkImg from "@/public/img/svg/link.svg";
import styles from "./observeAddInput.module.css";

interface ObserveAddInputType {
  handleListClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    title: string,
    btn: string,
    item?: string
  ) => void;
  newLink: string;
  setNewLink: React.Dispatch<React.SetStateAction<string>>;
}

const ObserveAddInput = ({
  handleListClick,
  newLink,
  setNewLink,
}: ObserveAddInputType) => {
  const onAddInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewLink(value);
  };

  return (
    <div className={styles.observeTitleFirst}>
      <div className={styles.addLink}>
        <Image
          className={styles.addLinkImg}
          width={20}
          height={20}
          src={linkImg}
          alt="링크추가이미지"
        />
        <input
          className={styles.addLinkInput}
          name="addLink"
          value={newLink}
          type="text"
          onChange={onAddInputChange}
          placeholder="링크를 추가해 보세요"
        />
        <button
          className={styles.addLinkButton}
          type="button"
          onClick={(event) =>
            handleListClick(event, "폴더에 추가", "폴더에 추가", newLink)
          }
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default ObserveAddInput;
