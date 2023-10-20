import React from "react";
//import "./landing.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="gnb">
          <a href="index.html">
            <img
              className="logo"
              src="/images/logo.svg"
              alt="홈으로 연결된 Linkbrary 로고"
            />
          </a>
          <a className="cta cta-short" href="signin.html">
            <span>로그인</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
