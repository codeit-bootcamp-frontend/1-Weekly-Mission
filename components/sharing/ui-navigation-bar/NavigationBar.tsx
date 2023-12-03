import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "sharing/util";
import { Cta } from "sharing/ui-cta";
import { Profile } from "user/ui-profile";
import { TEXT } from "./constant";
import { IconLogo } from "../../../public/images";

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
          <IconLogo className={cx("logo")} alt="Linkbrary 서비스 로고" />
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
