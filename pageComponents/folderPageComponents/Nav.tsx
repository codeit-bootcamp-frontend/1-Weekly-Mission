import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./Nav.module.css";

const Nav = ({ userEmail, userImage }: User) => {
  return (
    <>
      <nav className="folderPage-nav">
        <div className="gnb">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="홈으로 연결된 Linkbrary 로고"
              className="logo"
              width={100}
              height={100}
            />
          </Link>
          {userEmail ? (
            <div className="cta cta-short-account">
              <div>
                <Image
                  className="accountImg1"
                  src={userImage}
                  alt="계정 배경 이미지"
                  width={33}
                  height={33}
                />
              </div>
              <div>
                <p className={s.p}>{userEmail}</p>
              </div>
            </div>
          ) : (
            <div className="cta cta-short">
              <span>로그인</span>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
