import styles from "./SocialContainer.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(styles);

interface SocialContainerProps {
  text: string;
}

export const SocialLayout = ({ text }: SocialContainerProps) => {
  return (
    <div className={cx("container")}>
      <p className={cx("text")}>{text}</p>
      <div className={cx("icons")}>
        <Link href="https://www.google.com">
          <Image
            className={cx("icon")}
            src={"/images/googleIcon.svg"}
            alt="구글 소셜로그인 아이콘"
            width="42"
            height="42"
          ></Image>
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <Image
            className={cx("icon")}
            src={"/images/kakaoIcon.svg"}
            alt="카카오 소셜로그인 아이콘"
            width="42"
            height="42"
          ></Image>
        </Link>
      </div>
    </div>
  );
};
