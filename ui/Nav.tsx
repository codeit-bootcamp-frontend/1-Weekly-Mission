import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface navPropsType {
  userEmail: string;
}

const Nav = ({ userEmail }: navPropsType) => {
  return (
    <>
      <nav>
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
                  src="images/Ellipse.svg"
                  alt="계정 배경 이미지"
                  width={33}
                  height={33}
                />
                <Image
                  className="accountImg2"
                  src="images/myprofile.svg"
                  alt="계정 이미지"
                  width={15}
                  height={15}
                />
              </div>
              <div>
                <p style={{ fontSize: "1.4rem" }}>{userEmail}</p>
              </div>
            </div>
          ) : (
            <Link className="cta cta-short" href="signin.html">
              <span>로그인</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
