import Button from "components/button/serviceWithIcon/button";
import styles from "styles/modules/serviceWithIcon.module.css";

function ButtonList() {
  return (
    <div className={styles.wrapper}>
      <Button img="assets/images/share.svg" title="공유" />
      <Button img="assets/images/pen.svg" title="이름 변경" />
      <Button img="assets/images/delete.svg" title="삭제" />
    </div>
  );
}

export default ButtonList;
