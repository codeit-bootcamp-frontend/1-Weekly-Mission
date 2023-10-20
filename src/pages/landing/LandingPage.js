import React from 'react';
import './LandingPage.css';
import logo from '../../assets/common/logo.svg';
import content1 from '../../assets/landing/content1Img.png';
import content2 from '../../assets/landing/content2Img.png';
import content3 from '../../assets/landing/changeFolderName.png';
import content4 from '../../assets/landing/linkShareImg.png';
import content5 from '../../assets/landing/content5Img.png';
import facebookIcon from '../../assets/landing/facebookIcon.svg';
import instagramIcon from '../../assets/landing/instagramIcon.svg';
import twitterIcon from '../../assets/landing/twitterIcon.svg';
import youtubeIcon from '../../assets/landing/youtubeIcon.svg';

export default function LandingPage() {
  return (
    <div>
      <nav className="gnb">
        <a href="/">
          <img src={logo} alt="nav-title-logo" className="gnb-logo" />
        </a>
        <a href="/pages/signin/SigninPage">
          <button type="button" className="login-btn">
            로그인
          </button>
        </a>
      </nav>
      <header className="header">
        <section className="content1">
          <div className="content1-textbox">
            <h1 className="content1-slogan">
              <span>세상의 모든 정보</span>를<br />
              쉽게 저장하고 관리해 보세요
            </h1>
          </div>
          <a href="/signup">
            <button type="button" className="addlink-btn">
              링크 추가하기
            </button>
          </a>
          <div className="content1-image-container">
            <img
              className="content1-image"
              src={content1}
              alt="landing-page-content"
            />
          </div>
        </section>
      </header>
      <main>
        <section>
          <div className="content2-container">
            <div className="content-text-title">
              <p>
                <span className="content2-text-title-accent">원하는 링크</span>
                를 저장하세요
              </p>
            </div>
            <p className="content-text-normal">
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
            <div className="content-imagebox">
              <img
                className="content-image"
                src={content2}
                alt="content2-Img"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="content3-container">
            <div className="content-imagebox">
              <img className="content-image" src={content3} alt="content" />
            </div>
            <div className="content-text-title">
              <p>
                링크를 폴더로
                <span className="content3-text-title-accent">관리</span>
                하세요
              </p>
            </div>
            <p className="content-text-normal">
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </p>
          </div>
        </section>
        <section>
          <div className="content4-container">
            <div className="content-text-title">
              <p>
                저장한 링크를
                <span className="content4-text-title-accent">공유</span>해
                보세요.
              </p>
            </div>
            <p className="content-text-normal">
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
            <div className="content-imagebox">
              <img
                className="content-image"
                src={content4}
                alt="link-share-img"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="content5-container">
            <div className="content-imagebox">
              <img className="content-image" src={content5} alt="content5" />
            </div>
            <div className="content-text-title">
              <p>
                저장한 링크를
                <span className="content5-text-title-accent">검색</span>해
                보세요
              </p>
            </div>
            <div className="content-text-normal">
              <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-items">
            <span className="footer-copyrights">&copy;codeit - 2023</span>
            <div className="footer-privacy-policy">
              <a className="footer-policy" href="/privacy">
                <p>Privacy Policy</p>
              </a>
              <a className="footer-faq" href="/faq">
                <p>FAQ</p>
              </a>
            </div>
            <div className="footer-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebookIcon} alt="facebookIcon" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="twitterIcon" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtubeIcon} alt="youtubeIcon" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramIcon} alt="instagramIcon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
