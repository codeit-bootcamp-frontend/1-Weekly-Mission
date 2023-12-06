import { LOGO_IMAGE } from "@/src/sharing/ui-navigation-bar/constant";
import Image from "next/image";
import Link from "next/link";
import { ROUTE } from "@/src/sharing/util";
import classNames from "classnames/bind";
import styles from "./SignTitle.module.scss";

interface SignTitleProps {
  currentPath: string;
}

const SignTitle = ({ currentPath }: SignTitleProps) => {
  const cx = classNames.bind(styles);

  return (
    <div>
      <nav>
        <Link href="/">
          <img src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
        </Link>
      </nav>
      <div>
        <p>
          {currentPath === "signin"
            ? "회원이 아니신가요?"
            : "이미 회원이신가요?"}
          <Link href={currentPath === "signin" ? ROUTE.회원가입 : ROUTE.로그인}>
            <span className={cx("link")}>
              {currentPath === "signin" ? "회원가입 하기" : "로그인 하기"}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignTitle;
