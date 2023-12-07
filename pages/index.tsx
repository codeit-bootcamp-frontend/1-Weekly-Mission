import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import classNames from 'classnames/bind';
import Logo from '@/public/images/linkbrary.svg';
import HeroImage from '@/public/images/hero.png';
import SaveLinkImage from '@/public/images/image1.png';
import ManageLinkImage from '@/public/images/image2.png';
import ShareLinkImage from '@/public/images/image3.png';
import SearchLinkImage from '@/public/images/image4.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const cx = classNames.bind(styles);

  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <main className={cx(styles.main)}>
        <nav className={cx(styles.nav)}>
          <div className={cx(styles.gnb)}>
            <Link href="/">
              <Logo className={cx(styles.logo)} alt="홈으로 연결된 Linkbrary 로고" />
            </Link>
            <Link className={cx(styles.cta, styles.cta_short)} href="/signin">
              <span>로그인</span>
            </Link>
          </div>
        </nav>
        <header className={cx(styles.header)}>
          <div className={cx(styles.hero_header)}>
            <h1 className={cx(styles.slogan)}>
              <span className={cx(styles.slogan_gradient, styles.background_clip_text)}> 세상의 모든 정보</span>를
              <br />
              쉽게 저장하고 관리해 보세요
            </h1>
            <Link className={cx(styles.cta, styles.cta_long)} href="signup.html">
              <span>링크 추가하기</span>
            </Link>
            <Image src={HeroImage} className={cx(styles.hero_image)} alt="Linkbrary 서비스 소개" />
          </div>
        </header>
        <article className={cx(styles.article)}>
          <section className={cx(styles.section)}>
            <h2 className={cx(styles.title)}>
              <span className={cx(styles.title_1_gradient, styles.background_clip_text)}> 원하는 링크</span>를
              저장하세요
            </h2>
            <p className={styles.description}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <br className={styles.line_break_tablet_desktop} />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br className={styles.line_break_tablet_desktop} />한 공간에 저장하세요.
            </p>
            <Image src={SaveLinkImage} className={styles.content_image} alt="링크의 내용이 담긴 카드들" />
          </section>
          <section className={styles.section}>
            <h2 className={styles.title}>
              링크를 폴더로
              <span className={cx(styles.title_2_gradient, styles.background_clip_text)}>관리</span>하세요
            </h2>
            <p className={styles.description}>
              나만의 폴더를 무제한으로 만들고
              <br className={styles.line_break_tablet_desktop} />
              다양하게 활용할 수 있습니다.
            </p>
            <Image src={ManageLinkImage} className={styles.content_image} alt="폴더 이름 변경 기능" />
          </section>
          <section className={styles.section}>
            <h2 className={styles.title}>
              저장한 링크를
              <span className={cx(styles.title_3_gradient, styles.background_clip_text)}>공유</span>해 보세요
            </h2>
            <p className={styles.description}>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.
            </p>
            <Image src={ShareLinkImage} className={styles.content_image} alt="폴더 공유 기능" />
          </section>
          <section className={styles.section}>
            <h2 className={styles.title}>
              저장한 링크를
              <span className={cx(styles.title_4_gradient, styles.background_clip_text)}>검색</span>해 보세요
            </h2>
            <p className={styles.description}>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
            <Image src={SearchLinkImage} className={cx(styles.content_image)} alt="링크 검색 기능" />
          </section>
        </article>
        <footer className={styles.footer}>
          <div className={styles.footer_box}>
            <span className={styles.copyright}>©codeit - 2023</span>
            <div className={styles.footer_links}>
              <Link className={styles.footer_link} href="privacy.html">
                Privacy Policy
              </Link>
              <Link className={styles.footer_link} href="faq.html">
                FAQ
              </Link>
            </div>
            <div className={styles.sns}>
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook.svg" alt="facebook 홈페이지로 연결된 facebook 로고" />
              </Link>
              <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter.svg" alt="twitter 홈페이지로 연결된 twitter 로고" />
              </Link>
              <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/youtube.svg" alt="youtube 홈페이지로 연결된 youtube 로고" />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram.svg" alt="instagram 홈페이지로 연결된 instagram 로고" />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
