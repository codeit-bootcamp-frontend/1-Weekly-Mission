import { PathName } from "@/src/Input/ui-input-title/SignTitle";
import Image from "next/image";
import googleImage from "@/public/images/google.png";
import KakaoImage from "@/public/images/kakao.svg";
import styles from "./SocialSign.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SocialSign = ({ pathName }: PathName) => {
  return (
    <div className={cx("container")}>
      <span className={cx("title")}>
        {pathName.isSigninPage ? "소셜 로그인" : "다른 방식으로 가입하기"}
      </span>
      <div className={cx("social-icons")}>
        <div className={cx("google-background")}>
          <a className={cx("icon")} href="https://www.google.com">
            <Image src={googleImage} alt="구글 이미지" width={22} height={22} />
          </a>
        </div>
        <div className={cx("kakao-background")}>
          <a className={cx("icon")} href="https://www.kakaocorp.com/page">
            <KakaoImage width={26} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialSign;
