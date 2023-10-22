import LinkButton from '../LinkButton';
import NavLogo from './NavLogo';
import NavProfile from './NavProfile';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.root}>
      <NavLogo className={styles.logo} />
      {false ? (
        <NavProfile />
      ) : (
        <LinkButton className={styles.button} href="/signin" title="signin">
          로그인
        </LinkButton>
      )}
    </nav>
  );
}

export default Nav;
