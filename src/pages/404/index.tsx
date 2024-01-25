/* 에러url에서 보여주는 404 페이지 */

import Image from "next/image";
import Link from "next/link";

import ErrorImg from "public/images/error-img.png";

import styles from "./ErrorPage.module.scss";

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
          <Link href="/">
            <button className={styles["home-button"]}>HOME</button>
          </Link>
        </div>
        <div className={styles["img-content"]}>
          <Image src={ErrorImg} fill alt="error image" />
        </div>
      </div>
    </div>
  );
}
