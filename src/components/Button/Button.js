import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button({ as, className, to, title, children, onSubmit }) {
  const buttonClass = `${styles.root} ${className}`;

  if (as === 'Link')
    return (
      <Link className={buttonClass} to={to} title={title}>
        {children}
      </Link>
    );
  if (!as)
    return (
      <button className={buttonClass} onSubmit={onSubmit}>
        {children}
      </button>
    );
}

export default Button;
