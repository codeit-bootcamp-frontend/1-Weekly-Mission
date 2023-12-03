import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "sharing/util";
import { TEXT } from "./constant";
import { forwardRef } from "react";
import {
  IconFaceBook,
  IconInstagram,
  IconTwitter,
  IconYoutube,
} from "../../../public/images";
import Link from "next/link";

const cx = classNames.bind(styles);

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className={cx("container")}>
      <div className={cx("items")}>
        <span className={cx("copyright")}>{TEXT.codeit}</span>
        <div className={cx("links")}>
          <Link className={cx("link")} href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </Link>
          <Link className={cx("link")} href={ROUTE.FAQ}>
            {TEXT.faq}
          </Link>
        </div>
        <div className={cx("sns")}>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFaceBook alt="facebook 홈페이지로 연결된 facebook 로고" />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconTwitter alt="twitter 홈페이지로 연결된 twitter 로고" />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconYoutube alt="youtube 홈페이지로 연결된 youtube 로고" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram alt="instagram 홈페이지로 연결된 instagram 로고" />
          </Link>
        </div>
      </div>
    </footer>
  );
});
