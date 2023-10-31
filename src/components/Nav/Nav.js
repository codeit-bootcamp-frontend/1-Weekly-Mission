import Logo from '../Logo/Logo';
import NavProfile from './NavProfile';
import Button from '../Button/Button';
import styles from './Nav.module.css';
import useAuth from '../../hooks/useAuth';

function Nav() {
  const { token } = useAuth();

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        {token.access ? (
          <NavProfile />
        ) : (
          <Button
            as="Link"
            className={styles.button}
            to="/signin"
            title="signin"
          >
            로그인
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
