import styles from "./NavigationBar.module.scss";
import classNames from "classnames/bind";
import { ROUTE } from "@/src/sharing/util";
import { Cta } from "@/src/sharing/ui-cta";
import { Profile } from "@/src/user/ui-profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import fetcher from "../util/axiosInstance";
import { UserRawData } from "@/src/user/type";
import Image from "next/image";

const cx = classNames.bind(styles);

type NavigationBarProps = {
  isSticky: boolean;
};

export const NavigationBar = ({ isSticky }: NavigationBarProps) => {
  // 현재 유저 가져오는 쿼리
  const currentUser = useQuery({
    queryKey: ["me"],
    queryFn: () => fetcher<UserRawData[]>({ url: "/users", method: "GET" }),
  });

  const user = currentUser.data?.data?.[0];

  const profile = user
    ? { email: user.email, image_source: user.image_source }
    : null;
  return (
    <nav className={cx("container", { sticky: isSticky })}>
      <div className={cx("items")}>
        <Link href={ROUTE.랜딩}>
          <div className={cx("logo")}>
            <Image fill src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
          </div>
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
