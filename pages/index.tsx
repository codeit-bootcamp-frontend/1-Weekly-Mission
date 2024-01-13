import Link from "next/link";
import styles from "./index.module.css";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={clsx(styles.starter, styles.flex_center)}>
          <Link href="/">
            <div className={clsx(styles.logo_wrapper, styles.logo)}>
              <Image fill src="/images/landing/logo.png" alt="Logo" />
            </div>
          </Link>
          <Link
            className={clsx(styles.login, styles.flex_center)}
            href="/signin"
          >
            로그인
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>
            <div className={styles.first_line}>
              <div>
                <span>세상의 모든 정보</span>를
              </div>
            </div>
            <div className={styles.second_line}>
              <div>쉽게 저장하고 </div>
              <div>관리해보세요</div>
            </div>
          </h1>

          <Link
            className={clsx(styles.add_link, styles.flex_center)}
            href="/signup"
          >
            링크 추가하기
          </Link>
          <div className={styles.intro_img}>
            <Image src="/images/landing/img1.png" fill alt="Intro" />
          </div>
        </div>

        <div
          className={clsx(
            styles.content,
            styles.flex_center,
            styles.first_content
          )}
        >
          <div className={styles.frame}>
            <div className={clsx(styles.texts, styles.pink_blur)}>
              <h2>
                <span>원하는 링크</span>를 저장하세요
              </h2>
            </div>
            <div className={styles.para}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </div>

            <div className={styles.content_img}>
              <Image fill src="/images/landing/img2.png" alt="Content" />
            </div>
          </div>
        </div>

        <div className={clsx(styles.content, styles.flex_center)}>
          <div className={styles.frame}>
            <div className={clsx(styles.content_img, styles.reloc_img)}>
              <Image src="/images/landing/img3.png" fill alt="Content" />
            </div>
            <div
              className={clsx(
                styles.texts,
                styles.beige_blur,
                styles.reloc_texts
              )}
            >
              <h2>
                링크를 폴더로 <span>관리</span>하세요
              </h2>
            </div>
            <div className={clsx(styles.para, styles.reloc_para)}>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </div>
          </div>
        </div>

        <div className={clsx(styles.content, styles.flex_center)}>
          <div className={styles.frame}>
            <div className={clsx(styles.texts, styles.blue_blur)}>
              <h2>
                저장한 링크를 <span>공유</span>해 보세요
              </h2>
            </div>
            <div className={styles.para}>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </div>
            <div className={clsx(styles.content_img)}>
              <Image fill src="/images/landing/img7.png" alt="Content" />
            </div>
          </div>
        </div>

        <div className={clsx(styles.content, styles.flex_center)}>
          <div className={styles.frame}>
            <div className={clsx(styles.content_img, styles.reloc_img)}>
              <Image src="/images/landing/img6.png" alt="Content" fill />
            </div>
            <div
              className={clsx(
                styles.texts,
                styles.sky_blur,
                styles.reloc_texts
              )}
            >
              <h2>
                저장한 링크를 <span>검색</span>해 보세요
              </h2>
            </div>
            <div className={clsx(styles.para, styles.reloc_para)}>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.frame}>
            <div className={styles.footer_container}>
              <div className={styles.codeit_2023}>code-it - 2023</div>
              <div className={styles.extra_info}>
                <Link href="/privacy">
                  <span>Privacy Policy</span>
                </Link>
                <Link href="/faq">
                  <span>FAQ</span>
                </Link>
              </div>
              <div className={styles.sns_icons}>
                <Link href="https://www.facebook.com">
                  <Image
                    width={20}
                    height={20}
                    src="/images/landing/facebook.png"
                    alt="Facebook"
                  />
                </Link>
                <Link href="https://twitter.com">
                  <Image
                    width={20}
                    height={20}
                    src="/images/landing/twitter.png"
                    alt="Twitter"
                  />
                </Link>
                <Link href="https://www.youtube.com">
                  <Image
                    width={20}
                    height={20}
                    src="/images/landing/youtube.png"
                    alt="YouTube"
                  />
                </Link>
                <Link href="https://www.instagram.com">
                  <Image
                    width={20}
                    height={20}
                    src="/images/landing/instagram.png"
                    alt="Instagram"
                  />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
