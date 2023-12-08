import styles from "./Spinner.module.scss";
import Image from "next/image";

function Spinner() {
  return (
    <div className={styles["container"]}>
      <Image src="gifs/Spinner.gif" width={200} height={200} alt="loading..." />
    </div>
  );
}

export default Spinner;
