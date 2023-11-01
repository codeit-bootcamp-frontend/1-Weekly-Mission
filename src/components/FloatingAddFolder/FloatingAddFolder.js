import styles from "./FloatingAddFolder.module.css";
import plus from "../../assets/plus_white.svg";

const FloatingAddFolder = () => {
  return (
    <button className={styles.floatingAddFolder}>
      <p>폴더 추가</p>
      <img className={styles.plusImg} src={plus} alt="더하기 이미지" />
    </button>
  );
};

export default FloatingAddFolder;
