import { MouseEventHandler } from "react";
import styles from "./SocialLogin.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

type SocialLoginProps = {
  url: string;
  iconSource: string;
  socialName: string;
};

export const SocialLogin = ({
  url,
  iconSource,
  socialName,
}: SocialLoginProps) => {
  return (
    <div className={cx("container")}>
      <Link href={url}>
        <img
          className={cx("icon")}
          src={iconSource}
          alt={`${socialName} 아이콘`}
        />
      </Link>
    </div>
  );
};
