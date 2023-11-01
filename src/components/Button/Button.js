import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button({ as, className, to, title, children, onClick }) {
  const buttonClass = `${styles.root} ${className}`;

  if (as === 'Link')
    return (
      <Link className={buttonClass} to={to} title={title} onClick={onClick}>
        {children}
      </Link>
    );
  if (!as)
    return (
      <button className={buttonClass} onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;
