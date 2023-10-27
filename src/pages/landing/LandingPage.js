import React from 'react';
import '../../styles/global.css';
import './style.css';
import {
  titleImg,
  saveImg,
  manageImg,
  shareImg,
  searchImg,
} from '../../constants/landingImages';
import {
  logoImg,
  snsIconF,
  snsIconT,
  snsIconY,
  snsIconI,
} from '../../constants/globalImages';

function LandingPage() {
  return (
    <>
      <header>
        <nav>
          <a href="../.." className="nav-logo">
            <img src={logoImg} alt="Linkbrary 로고" />
          </a>
          <a href="/pages/login/signin.html" className="nav-login">
            <div className="btn btn-login">로그인</div>
          </a>
        </nav>
        <div className="hero-header">
          <h1>
            <span className="font-gradation">세상의 모든 정보</span>를<br />
            쉽게 저장하고 관리해 보세요.
          </h1>
          <a href="/pages/login/signup.html">
            <div className="btn btn-add-link">링크 추가하기</div>
          </a>
          <img src={titleImg} alt="웹사이트 사진" />
        </div>
      </header>
      <article>
        <section className="save">
          <h2>
            <span className="font-gradation">원하는 링크</span>를<br />
            저장하세요.
          </h2>
          <p>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상,
            <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을
            <br />한 공간에 저장하세요.
          </p>

          <img src={saveImg} alt="저장기능 설명 사진" />
        </section>

        <section className="manage">
          <h2>
            링크를 폴더로
            <br />
            <span className="font-gradation">관리</span>하세요
          </h2>
          <p>
            나만의 폴더를 무제한으로 만들고
            <br />
            다양하게 활용할 수 있습니다.
          </p>

          <img src={manageImg} alt="폴더관리기능 설명 사진" />
        </section>

        <section className="share">
          <h2>
            저장한 링크를 <br />
            <span className="font-gradation">공유</span>해 보세요.
          </h2>
          <p>
            여러 링크를 폴더에 담고 공유할 수 있습니다. <br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
            공유해 보세요.
          </p>
          <img src={shareImg} alt="공유기능 설명 사진" />
        </section>

        <section className="search">
          <h2>
            저장한 링크를
            <br />
            <span className="font-gradation">검색</span>해 보세요.
          </h2>
          <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          <img src={searchImg} alt="검색기능 설명 이미지" />
        </section>
      </article>

      <footer>
        <div className="footer-container">
          <span>©codeit - 2023</span>
          <div className="footer-menu">
            <a href="/pages/privacy/privacy.html">Privacy Policy</a>
            <a href="/pages/faq/faq.html">FAQ</a>
          </div>
          <div className="sns-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={snsIconF} alt="Linkbrary의 facebook 바로가기" />
            </a>
            <a
              href="https://twitter.com/?lang=ko"
              target="_blank"
              rel="noreferrer"
            >
              <img src={snsIconT} alt="Linkbrary의 twiter 바로가기" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={snsIconY} alt="Linkbrary의 youtube 바로가기" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={snsIconI} alt="Linkbrary의 instagram 바로가기" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
