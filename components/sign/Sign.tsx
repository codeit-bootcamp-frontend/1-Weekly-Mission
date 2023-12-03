import styles from "./Sign.module.scss";
import classNames from "classnames/bind";
import { IconLogo } from "../../public/images";
import Link from "next/link";
import SignInput from "./SignInput";

const cx = classNames.bind(styles);

const Sign = () => {
  return (
    <>
      <div className={cx("sign-wrapper", "flex-center")}>
        <div className={cx("sign-header")}>
          <Link href="/">
            <IconLogo className={cx("logo")} />
          </Link>
          <div className={cx("description")}>
            <span className={cx("check")}>이미 회원이신가요?</span>
            <Link className={cx("move-page", "flex-center")} href="/signin">
              로그인 하기
            </Link>
          </div>

          <div className={cx("sign-content-wrapper")}>
            <div className={cx("sign-content")}>
              <form>
                <SignInput type="email" placeholder="이메일을 입력해주세요" />
                <SignInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
                <SignInput
                  type="passwordCheck"
                  placeholder="비밀번호를 입력해주세요"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
