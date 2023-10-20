import React, { useEffect, useState } from "react";
import "./landing.css";
import { getLogin } from "./api";

const Nav = () => {
  const [userEmail, setUserEmail] = useState(false);

  const defaultLogin = async () => {
    const { email } = await getLogin();
    setUserEmail(email);
  };

  useEffect(() => {
    defaultLogin();
  }, []);

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
          {/* <a className="cta cta-short" href="signin.html">
            {userEmail ? <p>{userEmail}</p> : <span>로그인</span>}
          </a> */}
          {userEmail ? (
            <div className="cta cta-short-account">
              <div>
                <img
                  className="accountImg1"
                  src="images/Ellipse.svg"
                  alt="계정 배경 이미지"
                />
                <img
                  className="accountImg2"
                  src="images/myprofile.svg"
                  alt="계정 이미지"
                />
              </div>
              <div>
                <p style={{ fontSize: "1.4rem" }}>{userEmail}</p>
              </div>
            </div>
          ) : (
            <a className="cta cta-short" href="signin.html">
              <span>로그인</span>
            </a>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
