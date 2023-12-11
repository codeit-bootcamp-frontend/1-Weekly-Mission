import React from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./SignHeader.module.css";

const SignHeader = ({
  askSentence,
  path,
  functionSentence,
}: SignHeaderProps) => {
  return (
    <>
      <Link className={s.logoLink} href="/">
        <Image
          className={s.headerLogo}
          src="/images/logo.svg"
          alt="홈으로 연결된 Linkbrary 로고"
          width={200}
          height={200}
        />
      </Link>
      <p className={s.headerMessage}>
        {askSentence}
        <Link className={s.headerLink} href={path}>
          {functionSentence}
        </Link>
      </p>
    </>
  );
};

export default SignHeader;
