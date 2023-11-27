import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "user/data-access-user";
import { Footer } from "sharing/ui-footer";
import { NavigationBar } from "sharing/ui-navigation-bar";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface LayoutProps {
  children: ReactNode;
  isSticky?: boolean;
}

// interface DataValues {
//   email: string;
//   profileImageSource: string;
// }

export const Layout = ({ children, isSticky = true }: LayoutProps) => {
  const { data } = useGetUser();
  const { email = "", profileImageSource = "" } = data || {};
  const profile = { email, profileImageSource };

  // const { data } = useGetUser();
  // const { email, profileImageSource }: ProfileValues = data || {};
  // const { email = "", profileImageSource = "" }: DataValues = data || {};
  // const { email, profileImageSource } = data || {};

  // const profile = { email, profileImageSource };
  // const profile = data ? { email, profileImageSource } : undefined;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </div>
  );
};
