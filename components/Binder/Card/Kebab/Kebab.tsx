import { MouseEvent } from "react";
import styles from "./Kebab.module.css";
import Image from "next/image";
import useToggle from "@/hooks/useToggle";

const Kebab = ({
  handleDelete,
  handleAdd,
}: {
  handleDelete: (e: MouseEvent) => void;
  handleAdd: (e: MouseEvent) => void;
}) => {
  const kebab = useToggle();

  return (
    <div className={styles.root}>
      <button type="button" className={styles.kebabContainer} onClick={kebab.handleToggle}>
        <Image width={21} height={17} className={styles.kebab} src="/icons/kebab.svg" alt="쩜쩜쩜" />
      </button>
      {kebab.state && (
        <div className={styles.kebabButtonList}>
          <button className={styles.kebabButton} onClick={handleDelete}>
            삭제하기
          </button>
          <button className={styles.kebabButton} onClick={handleAdd}>
            폴더에 추가
          </button>
        </div>
      )}
    </div>
  );
};

export default Kebab;
