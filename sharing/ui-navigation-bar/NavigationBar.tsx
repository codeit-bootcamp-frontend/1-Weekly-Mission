import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "sharing/util";
import { Cta } from "sharing/ui-cta";
import { Profile } from "user/ui-profile";
import { LOGO_IMAGE, TEXT } from "./constant";

const cx = classNames.bind(styles);

type NavigationBarProps = {
  profile: {
    imageSource: string;
    email: string;
  } | null;
  isSticky: boolean;
};

export const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <a href={ROUTE.랜딩}>
          <img className={cx("logo")} src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta>
              <span className={cx("signin")}>{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
