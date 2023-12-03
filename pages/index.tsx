import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main id={styles["main"]}>
        <h1 className={styles["main__title"]}>
          <span className={styles["main__title--gradient"]}>
            세상의 모든 정보
          </span>
          를
          <br />
          쉽게 저장하고 관리해 보세요
        </h1>

        <div className={styles["main__link-container"]}>
          <Link href="/signup" className={styles["main__link"]}>
            링크 추가하기
          </Link>
        </div>
        <div className={styles["main__img-container"]}>
          <img
            src="/assets/images/main-img.png"
            alt="메인 이미지"
            width="1118"
          />
        </div>
      </main>

      <section className={`${styles["section"]} ${styles["save"]}`}>
        <h2 className={styles["section__title"]}>
          <span
            className={`${styles["section__title"]} ${styles["save__title--gradient"]}`}
          >
            원하는 링크
          </span>
          를
          <br />
          저장하세요
        </h2>
        <p className={styles["section__description"]}>
          나중에 읽고 싶은 글, 다시 보고 싶은 영상,
          <br />
          사고 싶은 옷, 기억하고 싶은 모든 것을
          <br />한 공간에 저장하세요.
        </p>
        <img
          className={styles["section__img"]}
          src="assets/images/save-img.png"
          alt="링크 저장 예시 이미지1"
          width="244"
        />
      </section>

      <section
        className={`${styles["section"]} ${styles["manage__container"]}`}
      >
        <img
          className={`${styles["section__img"]} ${styles["manage__img-wrapper--gradient"]}`}
          src="assets/images/manage-img.png"
          alt="공유하기 기능 이미지"
          width="414"
        />
        <h2 className={styles["section__title"]}>
          링크를 폴더로
          <br />
          <span className={styles["manage__title--gradient"]}>관리</span>하세요
        </h2>
        <p className={styles["section__description"]}>
          나만의 폴더를 무제한으로 만들고
          <br />
          다양하게 활용할 수 있습니다.
        </p>
      </section>

      <section className={`${styles["section"]} ${styles["share__container"]}`}>
        <h2 className={styles["section__title"]}>
          저장한 링크를
          <br />
          <span
            className={`${styles["section__title"]} ${styles["share__title--gradient"]}`}
          >
            공유
          </span>
          해 보세요
        </h2>
        <p className={styles["section__description"]}>
          여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요.
        </p>
        <img
          className={`${styles["section__img"]} ${styles["share__img-container--gradient"]}`}
          src="assets/images/share-img.png"
          alt="공유하기 기능 이미지"
          width="416"
        />
      </section>

      <section
        className={`${styles["section"]} ${styles["search__container"]}`}
      >
        <img
          className={`${styles["section__img"]} ${styles["search__img-wrapper"]}`}
          src="assets/images/search-img.png"
          alt="검색 예시 이미지"
          width="619"
        />
        <h2 className={styles["section__title"]}>
          저장한 링크를
          <br />
          <span
            className={`${styles["section__title"]} ${styles["search__title--gradient"]}`}
          >
            검색
          </span>
          해 보세요
        </h2>
        <p className={styles["section__description"]}>
          중요한 정보들을 검색으로 쉽게 찾아보세요.
        </p>
      </section>
    </>
  );
}
