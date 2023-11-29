import Link from "next/link";
import styles from "src/components/Login/Login.module.css";

function Login() {
  return (
    <Link className={styles.login} href="/">
      로그인
    </Link>
  );
}

export default Login;
