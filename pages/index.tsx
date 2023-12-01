import Image from "next/image";
import Link from "next/link";

function home() {
  return (
    <>
      <nav className="nav">
        <Link className="grid--logo" href="/">
          <Image width={120} height={40} className="logo" src="index/logo.svg" alt="링크브러리 홈화면으로 이동" />
        </Link>
        <Link className="sign sign--sm grid--sign" href="/signin">
          로그인
        </Link>
      </nav>
      <header className="section section--grid-header section--background-color-blue">
        <h1 className="section__head-title grid--title">
          <span className="text--gradient-color1">세상의 모든 정보</span>를<br />
          <span>쉽게 저장하고</span>
          <span className="text--display"> 관리해 보세요</span>
        </h1>
        <Link className="sign sign--lg grid--sign" href="/signup">
          링크 추가하기
        </Link>
        <Image width={40} height={40} className="section__img grid--img" src="index/_img.svg" alt="링크검색기능 예시이미지" />
      </header>
      <section className="section section--grid-main">
        <h2 className="section__title grid--title">
          <span className="text--gradient-color2">원하는 링크</span>를 저장하세요
        </h2>
        <p className="section__text grid--text">
          나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.
        </p>
        <img className="section__img img--sm grid--img" src="index/_img1.svg" alt="" />
      </section>
      <section className="section section--grid-main section--grid-reverse">
        <img className="section__img img--sm grid--img grid--img-reverse" src="index/_img2.svg" alt="" />
        <h2 className="section__title grid--title">
          링크를 폴더로
          <span className="text--gradient-color3">관리</span>하세요
        </h2>
        <p className="section__text grid--text">나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.</p>
      </section>
      <section className="section section--grid-main">
        <h2 className="section__title grid--title">
          저장한 링크를
          <span className="text--gradient-color4">공유</span>해 보세요
        </h2>
        <p className="section__text grid--text">
          여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.
        </p>
        <img className="section__img img--sm grid--img" src="index/_img3.svg" alt="" />
      </section>
      <section className="section section--grid-main section--grid-reverse">
        <img className="section__img img--sm grid--img grid--img-reverse" src="index/_img4.svg" alt="" />
        <h2 className="section__title grid--title">
          저장한 링크를
          <span className="text--gradient-color5">검색</span>해 보세요
        </h2>
        <p className="section__text grid--text">중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
      </section>
      <footer className="footer">
        <div className="footer__content grid--copy">©codeit - 2023</div>
        <div className="footer__content grid--info gap30">
          <a className="color--gray3" href="/privacy">
            Privacy Policy
          </a>
          <a className="color--gray3" href="/faq">
            FAQ
          </a>
        </div>
        <div className="footer__content grid--sns gap10">
          <a className="footer__sns" target="_blank" href="https://www.facebook.com">
            <img src="index/facebook.svg" alt="페이스북 페이지로 연결" />
          </a>
          <a className="footer__sns" target="_blank" href="https://twitter.com">
            <img src="index/twitter.svg" alt="트위터 페이지로 연결" />
          </a>
          <a className="footer__sns" target="_blank" href="https://www.youtube.com">
            <img src="index/youtube.svg" alt="유튜브 페이지로 연결" />
          </a>
          <a className="footer__sns" target="_blank" href="https://www.instargram.com">
            <img src="index/instagram.svg" alt="인스타그램 페이지로 연결" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default home;
