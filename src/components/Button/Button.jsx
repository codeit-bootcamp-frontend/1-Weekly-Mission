import styles from "./Button.module.css";

const Button = ({ className, link, text }) => {
  const buttonClassName = className;
  return (
    <a className={`${styles.cta} ${styles[buttonClassName]}`} href={link}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
