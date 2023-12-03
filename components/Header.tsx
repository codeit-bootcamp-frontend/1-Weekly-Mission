import React, { useContext, useState } from "react";
import logoImg from "@/public/img/png/Linkbrary.png";
import { isLocation } from "@/utils/location";
import Link from "next/link";
import { AccountContext } from "@/contexts/AccountContext";
import Image from "next/image";

const MOBILE_WIDTH = 390;

const Header = () => {
  const { account, errorMessage } = useContext(AccountContext);
  const { name, email, image_source: profileImageSource } = account?.data[0];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <header style={{ position: isLocation() ? "static" : "sticky" }}>
      <div className="inner">
        <h1>
          <Link href="/">
            <Image width={133} height={24} src={logoImg} alt="logo" />
          </Link>
        </h1>
        <div className="header-login">
          {!account ? (
            <button type="button">로그인</button>
          ) : (
            <>
              <Image
                width={28}
                height={28}
                className="profile_logo"
                src={profileImageSource ? profileImageSource : ""}
                alt={name ? name : ""}
              />
              {windowWidth > MOBILE_WIDTH ? (
                <span className="profile_id">{email && email}</span>
              ) : null}
            </>
          )}
          {errorMessage && <span>{errorMessage.message}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
