import React from "react";
import Card from "./Card";
//import "./landing.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="hero-header">
          <h1 className="slogan">
            <span className="slogan-gradient background-clip-text">
              {" "}
              세상의 모든 정보
            </span>
            를
            <br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <a className="cta cta-long" href="signup.html">
            <span>링크 추가하기</span>
          </a>
          {/* <img
            src="/images/hero.png"
            className="hero-image"
            alt="Linkbrary 서비스 소개"
          /> */}
          <Card />
        </div>
      </header>
    </>
  );
};

export default Header;
