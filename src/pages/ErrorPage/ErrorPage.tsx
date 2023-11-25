import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";
import ErrorImg from "src/assets/images/error-img.png";

function ErrorPage() {
  return (
    <div className={styles["page"]}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <h1>Oops!!</h1>
          <p>
            Nothing found in this keywords.
            <br />
            Check link path once again!
          </p>
          <button className={styles["home-button"]}>
            <Link to="/">HOME</Link>
          </button>
        </div>
        <div className={styles["img-content"]}>
          <img src={ErrorImg} />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
