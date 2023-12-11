import styles from "./FolderHero.module.css";
import LinkImg from "/public/icon/link.svg";
import AddLinkToFolder from "../../../modals/contents/AddLinkToFolder";
import { useState } from "react";
import getFolderTagListData from "../../../utils/getFolderTagListData";
import Image from "next/image";

function FolderHero() {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const changeOpenState: (openState: boolean) => void = (openState) =>
    setOpen(openState);
  const TagListData = getFolderTagListData();

  return (
    <section className={styles.hero__folder}>
      <div className={styles.container}>
        <div className={styles.div_link}>
          <div>
            <span className={styles.link_image}>
              <Image src={LinkImg} alt="link icon" />
            </span>
          </div>
          <div className={styles.link_container}>
            <button className={styles.link_button} onClick={handleClick}>
              추가하기
            </button>
          </div>
          <input
            className={styles.input_link}
            placeholder="링크를 추가해 보세요"
          />
        </div>
      </div>
      <AddLinkToFolder
        isOpen={isOpen}
        changeOpenState={changeOpenState}
        TagListData={TagListData}
      />
    </section>
  );
}

export default FolderHero;
