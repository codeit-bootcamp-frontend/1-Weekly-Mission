import Image from "next/image";
import Head from "next/head";
import classNames from "classnames";

import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

import heroImg from "@/assets/images/hero.png";
import contentImg1 from "@/assets/images/content-1.png";
import contentImg2 from "@/assets/images/content-2.png";
import contentImg3 from "@/assets/images/content-3.png";
import contentImg4 from "@/assets/images/content-4.png";

import styles from "@/assets/styles/landing.module.css";
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();

  const handleAddLinkButtonClick = () => {
    router.push("/signup");
  };

  return (
    <>
      <Head>
        <title>LinkBrary - Landing</title>
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroHeadingWrapper}>
            <h1>
              <span
                className={classNames(
                  styles.heroHeadingGradient,
                  styles.backgroundClipText
                )}
              >
                세상의 모든 정보
              </span>
              를
              <br />
              쉽게 저장하고 관리해 보세요
            </h1>
          </div>
          <div className={styles.addLinkButton}>
            <Button size="large" onClick={handleAddLinkButtonClick}>
              링크 추가하기
            </Button>
          </div>
          <Image
            className={styles.heroImage}
            src={heroImg}
            alt="히어로 이미지"
          />
        </div>

        <ul className={styles.contentList}>
          <li className={styles.contentItem}>
            <h2 className={styles.contentTitle}>
              <span
                className={classNames(
                  styles.gradientRedToBlue,
                  styles.backgroundClipText
                )}
              >
                원하는 링크
              </span>
              를 저장하세요
            </h2>
            <p className={styles.contentDescription}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
            <Image
              className={styles.contentImage}
              src={contentImg1}
              alt="콘텐트 첫번째 이미지"
            />
          </li>

          <li className={styles.contentItem}>
            <h2 className={styles.contentTitle}>
              링크를 폴더로
              <span
                className={classNames(
                  styles.gradientBlueToYellow,
                  styles.backgroundClipText
                )}
              >
                {" "}
                관리
              </span>
              하세요
            </h2>
            <p className={styles.contentDescription}>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </p>
            <Image
              src={contentImg2}
              alt="콘텐트 두번째 이미지"
              className={styles.contentImage}
            />
          </li>

          <li className={styles.contentItem}>
            <h2 className={styles.contentTitle}>
              저장한 링크를
              <span
                className={classNames(
                  styles.gradientBlueToGreen,
                  styles.backgroundClipText
                )}
              >
                {" "}
                공유
              </span>
              해 보세요
            </h2>
            <p className={styles.contentDescription}>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
            <Image
              className={styles.contentImage}
              src={contentImg3}
              alt="콘텐트 세번째 이미지"
            />
          </li>
          <li className={styles.contentItem}>
            <h2 className={styles.contentTitle}>
              저장한 링크를
              <span
                className={classNames(
                  styles.gradientPinkToBlue,
                  styles.backgroundClipText
                )}
              >
                검색
              </span>
              해 보세요
            </h2>
            <p className={styles.contentDescription}>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
            <Image
              className={styles.contentImage}
              src={contentImg4}
              alt="콘텐트 네번째 이미지"
            />
          </li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
