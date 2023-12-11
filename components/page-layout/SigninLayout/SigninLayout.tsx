import { ReactNode } from "react";
import styles from "./SigninLayout.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { LOGO_IMAGE } from "@/components/sharing/ui-navigation-bar/constant";
import { ROUTE } from "@/components/sharing/util";
import { Cta } from "@/components/sharing/ui-cta";

const cx = classNames.bind(styles);

type SigninLayoutProps = {
  idInput: ReactNode;
  pwInput: ReactNode;
};

export const SigninLayout = ({ idInput, pwInput }: SigninLayoutProps) => {
  return (
    <div className={cx("container")}>
      <div className={cx("items")}>
        <Link href={ROUTE.랜딩}>
          <img
            className={cx("logo")}
            src={LOGO_IMAGE}
            alt="Linkbrary 서비스 로고"
          />
        </Link>
        {/* {checkMember} */}
        <div className={cx("items-input")}>
          {idInput}
          {pwInput}
        </div>
        <button className={cx("signin")} type="submit">
          <Cta>로그인</Cta>
        </button>
        {/* {socialLogin} */}
      </div>
    </div>
  );
};
