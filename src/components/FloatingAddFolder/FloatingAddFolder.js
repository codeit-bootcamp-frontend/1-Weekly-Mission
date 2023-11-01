import styles from "./FloatingAddFolder.module.css";
import plus from "../../assets/plus_white.svg";

const FloatingAddFolder = () => {
  return (
    <button className={styles.FloatingAddFolder}>
      <p>폴더 추가</p>
      <img className={styles.plus_img} src={plus} alt="더하기 이미지" />
    </button>
  );
};

export default FloatingAddFolder;
