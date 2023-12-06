import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/src/sharing/util";
import { Cta } from "@/src/sharing/ui-cta";
import { Profile } from "@/src/user/ui-profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import Link from "next/link";

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
        <Link href={ROUTE.랜딩}>
          <img className={cx("logo")} src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
        </Link>
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
