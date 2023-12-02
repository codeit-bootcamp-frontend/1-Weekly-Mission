import styles from "styles/PopOver.module.css";

function PopOver() {
  return (
    <div className={styles.PopOverBox}>
      <span>삭제하기</span>
      <span>폴더에 추가</span>
    </div>
  );
}

export default PopOver;
