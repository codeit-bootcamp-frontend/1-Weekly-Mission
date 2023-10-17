import React from "react";
import "./Navbar.css"; // 해당 CSS를 import합니다 (아래에서 해당 CSS도 만들어 보겠습니다.)
import "./global.css";

function Navbar() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/">
          <img className="logo" src="assets/logo.svg" alt="logo" />
        </a>
        <a href="signin">
          <button className="loginBtn">로그인</button>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
