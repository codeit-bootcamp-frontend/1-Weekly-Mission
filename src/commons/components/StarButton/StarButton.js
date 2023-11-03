import { ReactComponent as NoStar } from "assets/images/no-filled-star-icon.svg";
import styles from "./StarButton.module.scss";

function StarButton() {
  return (
    <>
      <button className={styles["star-button"]}>
        <NoStar />
      </button>
    </>
  );
}

export default StarButton;
