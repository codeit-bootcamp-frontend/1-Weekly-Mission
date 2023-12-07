import { PathName } from "@/src/Input/ui-input-title/SignTitle";
import { Cta } from "@/src/sharing/ui-cta";
import { TEXT } from "@/src/sharing/ui-footer/constant";
import styles from "./SignButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SignButton = ({ pathName }: PathName) => {
  return (
    <>
      <button className={cx("sign-button")}>
        <Cta>
          <span className={cx("text")}>
            {pathName.isSigninPage ? TEXT.login : TEXT.join}
          </span>
        </Cta>
      </button>
    </>
  );
};

export default SignButton;
