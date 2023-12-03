import Image from "next/image";
import styles from "./Sign.module.scss";
import classNames from "classnames/bind";
import { IconLogo } from "../../public/images";
import Link from "next/link";

const cx = classNames.bind(styles);

const Sign = () => {
  return (
    <>
      <div className={cx("signWrapper")}>
        <div className={cx("signHeader")}>
          <Link href="/">
            <IconLogo className={cx("logo")} />
          </Link>
          <div className={cx("signDescription")}>
            <span>이미 회원이신가요?</span>
            <Link href="/signin">로그인 하기</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
