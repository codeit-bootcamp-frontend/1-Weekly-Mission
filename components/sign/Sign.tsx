import styles from "./Sign.module.scss";
import classNames from "classnames/bind";
import { IconLogo, IconGoogle, IconKakao } from "@images/index";
import Link from "next/link";
import SignInput from "./SignInput";

const cx = classNames.bind(styles);

type stateProps = "signin" | "signup";
const Sign = ({ state }: { state: stateProps }) => {
  return (
    <>
      <div className={cx("sign-wrapper", "flex-center")}>
        <div className={cx("sign-header")}>
          <Link href="/">
            <IconLogo className={cx("logo")} />
          </Link>
          {state === "signin" ? (
            <div className={cx("description")}>
              <span className={cx("check")}>회원이 아니신가요?</span>
              <Link className={cx("move-page", "flex-center")} href="/signup">
                회원 가입하기
              </Link>
            </div>
          ) : (
            <div className={cx("description")}>
              <span className={cx("check")}>이미 회원이신가요?</span>
              <Link className={cx("move-page", "flex-center")} href="/signin">
                로그인 하기
              </Link>
            </div>
          )}
        </div>

        <div className={cx("sign-content-wrapper")}>
          <div className={cx("sign-content")}>
            <form>
              <SignInput type="email" />
              <SignInput type="password" />
              {state === "signup" && <SignInput type="passwordCheck" />}

              <button type="submit" className={cx("button", "flex-center")}>
                {state === "signin" ? "로그인" : "회원가입"}
              </button>
            </form>
          </div>
          <div className={cx("social-icon-wrapper")}>
            <div className={cx("social-description")}>
              {state === "signin" ? "소셜 로그인" : "다른 방식으로 가입하기"}
            </div>
            <div className={cx("icon-container")}>
              <Link href="https://www.google.com/" target="_blank">
                <IconGoogle />
              </Link>
              <Link href="https://www.kakaocorp.com/page/" target="_blank">
                <IconKakao />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
