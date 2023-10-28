import AddIMG from "assets/link.svg";
import styles from "./AddBar.module.css";

const AddBar = () => {
  return (
    <>
      <form className={styles.form}>
        <label htmlFor="add">
          <img src={AddIMG} alt="링크 이미지" />
        </label>
        <input
          id="add"
          name="add"
          type="text"
          className={styles.input}
          placeholder="링크를 추가해 보세요."
        />
        <button className={styles.button}>추가하기</button>
      </form>
    </>
  );
};

export default AddBar;
