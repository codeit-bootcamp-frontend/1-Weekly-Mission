import Link from "next/link";
import { ReactNode } from "react";
import styles from "./SignLayout.module.scss";
import { SnsSign } from "..";

type defaultType = "signin" | "signup";

const SIGNIN_TYPE = {
  type: "signin",
  description: "회원이 아니신가요?",
  span: "회원가입 하기",
  snsLabel: "소셜 로그인",
};
const SIGNUP_TYPE = {
  type: "signup",
  description: "이미 회원이신가요?",
  span: "로그인 하기",
  snsLabel: "다른 방식으로 가입하기",
};

function SignLayout({
  type = "signin",
  children,
}: {
  type: defaultType;
  children: ReactNode;
}) {
  const pageType = type === "signin" ? SIGNIN_TYPE : SIGNUP_TYPE;

  return (
    <div className={styles["sign-page"]}>
      <div className={styles["sign-container"]}>
        <header>
          <Link href="/">
            <div className={styles["logo-img"]}>
              <img src="icons/logo.svg" alt="logo img" />
            </div>
          </Link>
          <div className={styles["description"]}>
            {pageType.description}
            <span className={styles["signup-link"]}>
              <Link href="/signup">{pageType.span}</Link>
            </span>
          </div>
        </header>
        <div className={styles["form-container"]}>{children}</div>
        <SnsSign label={pageType.snsLabel} />
      </div>
    </div>
  );
}

export default SignLayout;
