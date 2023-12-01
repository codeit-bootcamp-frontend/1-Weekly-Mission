import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "user/data-access-user";
import { Footer } from "sharing/ui-footer";
import { NavigationBar } from "sharing/ui-navigation-bar";
import { ReactNode, RefObject } from "react";

const cx = classNames.bind(styles);

type LayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
  footerRef?: RefObject<HTMLElement>;
};

export const Layout = ({ children, isSticky = true, footerRef }: LayoutProps) => {
  const { data } = useGetUser();
  const profile = data ? { email: data.email, imageSource: data.profileImageSource } : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer ref={footerRef} />
    </div>
  );
};
