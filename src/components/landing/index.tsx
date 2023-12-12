import Link from "next/link";
import Image from "next/image";

import Layout from "@/components/layout/Layout";
import styles from "./index.module.css";

export default function Landing() {
  return (
    <Layout>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>
          <span className={styles.title__gradient}>세상의 모든 정보</span>를
          <br />
          쉽게 저장하고 관리해 보세요
        </h1>
        <div className={styles.hero__link}>
          <Link href="/signup" className={styles.hero__link__btn}>
            링크 추가하기
          </Link>
        </div>
        <div>
          <Image
            className={styles.hero__image}
            src="images/landing.svg"
            alt="hero"
            width={100}
            height={100}
          />
        </div>
      </section>
      <section>
        <ul className={styles.contents}>
          <li className={styles.content}>
            <h2 className={styles.content__info__title}>
              <span className={styles.content__gradient__link}>원하는 링크</span>를 저장하세요
            </h2>
            <p className={styles.content__info__description}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한
              공간에 저장하세요.
            </p>
            <Image
              className={styles.content__image}
              src="images/contents1.svg"
              alt="contents"
              width={100}
              height={100}
            />
          </li>
          <li className={styles.content}>
            <h2 className={styles.content__info__title}>
              링크를 폴더로
              <span className={styles.content__gradient__create}>관리</span>하세요
            </h2>
            <p className={styles.content__info__description}>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </p>
            <Image
              className={styles.content__image}
              src="images/contents2.svg"
              alt="contents"
              width={100}
              height={100}
            />
          </li>
          <li className={styles.content}>
            <h2 className={styles.content__info__title}>
              저장한 링크를
              <span className={styles.content__gradient__share}>공유</span>해 보세요
            </h2>
            <p className={styles.content__info__description}>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를
              공유해 보세요.
            </p>
            <Image
              className={styles.content__image}
              src="images/contents3.svg"
              alt="contents"
              width={100}
              height={100}
            />
          </li>
          <li className={styles.content}>
            <h2 className={styles.content__info__title}>
              저장한 링크를
              <span className={styles.content__gradient__search}>검색</span>해 보세요
            </h2>
            <p className={styles.content__info__description}>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
            <Image
              className={styles.content__image}
              src="images/contents4.svg"
              alt="contents"
              width={100}
              height={100}
            />
          </li>
        </ul>
      </section>
    </Layout>
  );
}
