import styles from "./Home.module.scss";
import Link from "next/link";
import { ResponsiveImg } from "@/components/common";

export default function Home() {
  return (
    <>
      <header className={styles["header"]}>
        <h1 className="title">
          <span className={styles["important"]}>세상의 모든 정보</span>를 <br />
          쉽게 저장하고 관리해 보세요
        </h1>
        <button className={styles["link-button"]}>
          <Link href="/folder">링크 추가하기</Link>
        </button>
        <div className={styles["sample-img"]}>
          <ResponsiveImg src="/images/home-img.png" alt="home" />
        </div>
      </header>

      <section className={styles["container"]}>
        <div className={styles["content"]}>
          <article className={styles["article"]} id={styles["article1"]}>
            <h3 className={styles["title"]}>
              <span className={styles["important1"]}>원하는 링크</span>를 <br />{" "}
              저장하세요
            </h3>
            <p className={styles["description"]}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
          </article>
          <div className={styles["img"]} id={styles["img1"]}>
            <ResponsiveImg src="/images/home-img1.png" alt="home" />
          </div>

          <div className={styles["img"]} id={styles["img2"]}>
            <ResponsiveImg src="/images/home-img2.png" alt="home" />
          </div>
          <article className={styles["article"]} id={styles["article2"]}>
            <h3 className={styles["title"]}>
              링크를 폴더로
              <br /> <span className={styles["important2"]}>관리</span>하세요
            </h3>
            <p className={styles["description"]}>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </p>
          </article>

          <article className={styles["article"]} id={styles["article3"]}>
            <h3 className={styles["title"]}>
              저장한 링크를
              <br />
              <span className={styles["important3"]}>공유</span>해보세요
            </h3>
            <p className={styles["description"]}>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
          </article>
          <div className={styles["img"]} id={styles["img3"]}>
            <ResponsiveImg src="/images/home-img3.png" alt="home" />
          </div>

          <div className={styles["img"]} id={styles["img4"]}>
            <ResponsiveImg src="/images/home-img4.png" alt="home" />
          </div>
          <article className={styles["article"]} id={styles["article4"]}>
            <h3 className={styles["title"]}>
              저장한 링크를
              <br /> <span className={styles["important4"]}>검색</span>해보세요
            </h3>
            <p className={styles["description"]}>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
