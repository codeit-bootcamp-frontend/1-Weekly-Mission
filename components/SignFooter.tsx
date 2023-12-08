import s from "./SignFooter.module.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const SignFooter = ({ sentence }: SignFooterProps) => {
  return (
    <div className={s.snsBox}>
      <span className={s.snsText}>{sentence}</span>
      <div className={s.snsLinks}>
        <Link className={s.googleLink} href="https://www.google.com/">
          <Image
            src="/images/google.png"
            alt="구글 버튼 이미지"
            width={25}
            height={25}
          />
        </Link>
        <Link className={s.kakaoLink} href="https://www.kakaocorp.com/page/">
          <Image
            src="/images/kakao.svg"
            alt="카카오 버튼 이미지"
            width={25}
            height={25}
          />
        </Link>
      </div>
    </div>
  );
};

export default SignFooter;
