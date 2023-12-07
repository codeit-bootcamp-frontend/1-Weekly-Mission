import clsx from "clsx";
import styles from "./Header.module.css";
import LinkButton from "../Button/LinkButton";
import Logo from "../Logo/Logo";
import HeaderUserProfile from "./HeaderUserProfile";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  position: string;
}

function Header({ className, position }: Props) {
  const [value, setValue] = useState<string | null>("");

  const headerClass = clsx(styles.root, position === "static" ? styles.static : styles.sticky, className);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      setValue(accessToken);
    }
  }, []);

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        {value ? (
          <HeaderUserProfile />
        ) : (
          <LinkButton className={styles.button} href="/signin" title="signin">
            로그인
          </LinkButton>
        )}
      </div>
    </header>
  );
}

export default Header;
