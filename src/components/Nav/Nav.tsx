import Logo from "../Logo/Logo";
import NavProfile from "./NavProfile";
import Button from "../Button/Button";
import styles from "./Nav.module.css";
import useAuth from "../../hooks/useAuth";
import clsx from "clsx";

interface Props {
  className?: string;
}

function Nav({ className }: Props) {
  const { isAuth } = useAuth();

  const classBinder = clsx(styles.root, className);

  return (
    <nav className={classBinder}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        {isAuth() ? (
          <NavProfile />
        ) : (
          <Button as="Link" className={styles.button} to="/signin" title="signin">
            로그인
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
