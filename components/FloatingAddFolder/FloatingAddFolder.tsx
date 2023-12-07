import styles from "./FloatingAddFolder.module.css";
import plus from "../../assets/images/plus_white.svg";
import Image from "next/image";

const FloatingAddFolder = () => {
  return (
    <button className={styles.floatingAddFolder}>
      <p>폴더 추가</p>
      <Image className={styles.plusImg} src={plus} alt="더하기 이미지" />
    </button>
  );
};

export default FloatingAddFolder;
