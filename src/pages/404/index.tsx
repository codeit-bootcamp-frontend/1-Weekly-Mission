import Image from "next/image";
import Link from "next/link";
import styles from "./ErrorPage.module.scss";
import ErrorImg from "public/images/error-img.png";

export default function ErrorPage() {
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
            <Link href="/">HOME</Link>
          </button>
        </div>
        <div className={styles["img-content"]}>
          <Image src={ErrorImg} fill alt="error image" />
        </div>
      </div>
    </div>
  );
}
