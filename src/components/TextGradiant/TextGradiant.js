import styles from './TextGradiant.module.css';

function TextGradiant({ className, children }) {
  const textGradiantStyle = `${styles.root} ${className}`;

  return <span className={textGradiantStyle}>{children}</span>;
}

export default TextGradiant;
