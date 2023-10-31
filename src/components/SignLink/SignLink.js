import { Link } from 'react-router-dom';
import styles from './SignLink.module.css';

function SignLink({ to, subtitle, children }) {
  return (
    <div className={styles.subtitle}>
      <p>{subtitle}</p>
      <Link className={styles.textLink} to={to} title={to}>
        {children}
      </Link>
    </div>
  );
}

export default SignLink;
