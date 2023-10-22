import React from 'react';
import '../../reset.css';
import '../../common_style.css';
import './style.css';
import { TitleImg, SaveImg, ManageImg, ShareImg, SearchImg } from './Images';
import {
  LogoImg,
  SnsIconF,
  SnsIconT,
  SnsIconY,
  SnsIconI,
} from '../CommonImages';

function Home() {
  return (
    <>
      <header>
        <nav>
          <a href="../..">
            <img src={LogoImg} alt="Linkbrary 로고" />
          </a>
          <a href="/pages/login/signin.html">
            <div className="btn btn-login">로그인</div>
          </a>
        </nav>
        <div className="hero-header">
          <h1>
            <span>세상의 모든 정보</span>를<br />
            쉽게 저장하고 관리해 보세요.
          </h1>
          <a href="/pages/login/signup.html">
            <div className="btn btn-add-link">링크 추가하기</div>
          </a>
          <img src={TitleImg} alt="웹사이트 사진" />
        </div>
      </header>
      <article>
        <section className="save">
          <div className="section-text">
            <h2>
              <span>원하는 링크</span>를<br />
              저장하세요.
            </h2>
            <p>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <br />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br />한 공간에 저장하세요.
            </p>
          </div>

          <img src={SaveImg} alt="저장기능 설명 사진" />
        </section>

        <section className="manage">
          <div className="section-text">
            <h2>
              링크를 폴더로
              <br />
              <span>관리</span>하세요
            </h2>
            <p>
              나만의 폴더를 무제한으로 만들고
              <br />
              다양하게 활용할 수 있습니다.
            </p>
          </div>

          <img src={ManageImg} alt="폴더관리기능 설명 사진" />
        </section>

        <section className="share">
          <div className="section-text">
            <h2>
              저장한 링크를 <br />
              <span>공유</span>해 보세요.
            </h2>
            <p>
              여러 링크를 폴더에 담고 공유할 수 있습니다. <br />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
              공유해 보세요.
            </p>
          </div>
          <img src={ShareImg} alt="공유기능 설명 사진" />
        </section>

        <section className="search">
          <div className="section-text">
            <h2>
              저장한 링크를
              <br />
              <span>검색</span>해 보세요.
            </h2>
            <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          </div>
          <img src={SearchImg} alt="검색기능 설명 이미지" />
        </section>
      </article>

      <footer>
        <div className="footer-container">
          <span>©codeit - 2023</span>
          <div className="footer-menu">
            <a href="/pages/privacy/privacy.html">Privacy Policy</a>
            <a href="/pages/faq/faq.html">FAQ</a>
          </div>
          <div className="snsIcons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SnsIconF} alt="Linkbrary의 facebook 바로가기" />
            </a>
            <a
              href="https://twitter.com/?lang=ko"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SnsIconT} alt="Linkbrary의 twiter 바로가기" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={SnsIconY} alt="Linkbrary의 youtube 바로가기" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SnsIconI} alt="Linkbrary의 instagram 바로가기" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
