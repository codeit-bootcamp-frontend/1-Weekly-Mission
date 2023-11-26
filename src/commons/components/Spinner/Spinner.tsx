import Spine from "src/assets/gifs/Spinner.gif";
import styles from "./Spinner.module.scss";

function Spinner() {
  return (
    <div className={styles["container"]}>
      <img src={Spine} alt="loading..." />
    </div>
  );
}

export default Spinner;
