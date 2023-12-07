import { LOGO_IMAGE } from "@/src/sharing/ui-navigation-bar/constant";
import Image from "next/image";
import Link from "next/link";
import { ROUTE } from "@/src/sharing/util";
import classNames from "classnames/bind";
import styles from "./SignTitle.module.scss";

export interface PathName {
  pathName: {
    isSigninPage: boolean;
    isSignupPage: boolean;
  };
}

const SignTitle = ({ pathName }: PathName) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("title-box")}>
      <nav className={cx("logo")}>
        <Link href="/">
          <Image src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" fill />
        </Link>
      </nav>
      <div className={cx("title-description-box")}>
        <p className={cx("title-description")}>
          {pathName.isSigninPage
            ? "회원이 아니신가요? "
            : "이미 회원이신가요? "}
          <Link href={pathName.isSigninPage ? ROUTE.회원가입 : ROUTE.로그인}>
            <span className={cx("link")}>
              {pathName.isSigninPage ? "회원가입 하기" : "로그인 하기"}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignTitle;
