import styles from "./KebabButton.module.scss";
import { ReactComponent as Kebab } from "assets/images/kebab.svg";

function KebabButton() {
  return (
    <button className={styles["kebab-button"]}>
      <Kebab />
    </button>
  );
}

export default KebabButton;
