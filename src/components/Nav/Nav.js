import Logo from '../Logo/Logo';
import NavProfile from './NavProfile';
import Button from '../Button/Button';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.root}>
      <Logo className={styles.logo} />
      {localStorage.getItem('accessToken') ? (
        <NavProfile />
      ) : (
        <Button as="Link" className={styles.button} to="/signin" title="signin">
          로그인
        </Button>
      )}
    </nav>
  );
}

export default Nav;
