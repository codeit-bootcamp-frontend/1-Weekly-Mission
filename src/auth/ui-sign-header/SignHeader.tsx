import { ROUTE } from "@/src/sharing/util";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import styles from "./SignHeader.module.scss";
import classNames from "classnames/bind";
import LinkbraryIcon from "public/images/linkbrary.svg";

const cx = classNames.bind(styles);

type SignHeaderProps = {
  message: string;
  link: {
    href: Url;
    text: string;
  };
};

export const SignHeader = ({ message, link }: SignHeaderProps) => {
  const { href, text } = link;
  return (
    <div className={cx("container")}>
      <Link href={ROUTE.랜딩}>
        <LinkbraryIcon className={cx("logo")} />
      </Link>
      <p className={cx("message-box")}>
        <span className={cx("message")}>{message}</span>
        <Link className={cx("link")} href={href}>
          {text}
        </Link>
      </p>
    </div>
  );
};
