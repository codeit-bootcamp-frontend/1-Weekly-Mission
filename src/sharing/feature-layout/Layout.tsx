import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "user/data-access-user";
import { Footer } from "sharing/ui-footer";
import { NavigationBar } from "sharing/ui-navigation-bar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  isSticky?: boolean;
}

const cx = classNames.bind(styles);

export const Layout = ({ children, isSticky = true }: LayoutProps) => {
  const { data } = useGetUser();
  const { email = "", profileImageSource = "" } = data || {};
  const profile = { email, profileImageSource };
  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
