import React from "react";
import Image from "next/image";
import styles from "./addInputSection.module.css";
import linkImg from "@/public/img/svg/link.svg";

interface AddInputSectionType {
  handleListClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    title: string,
    btn: string,
    item?: string | null
  ) => void;
  newLink: string;
  setNewLink: React.Dispatch<React.SetStateAction<string>>;
}

const AddInputSection = ({
  handleListClick,
  newLink,
  setNewLink,
}: AddInputSectionType) => {
  const onAddInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewLink(value);
  };

  return (
    <div className={styles.sectionTitleFirst}>
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

export default AddInputSection;
