import styles from "src/components/Button/Button.module.css";

interface ButtonProps {
  content: string;
}

function Button({ content }: ButtonProps) {
  return (
    <button className={styles.button} type="submit">
      {content}
    </button>
  );
}

export default Button;
