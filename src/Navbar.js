import React from "react";
import "./Navbar.css"; // 기존 상단 바 css 규칙 가져오기!!
import "./global.css";
import Logo from "./Logo";

function Navbar() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="../public">
          <Logo className="logo" alt="logo" />
        </a>
        <a href="signin">
          <button className="loginBtn">로그인</button>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
