import styles from "src/components/InputLabel/InputLabel.module.css";

interface InputLabelProps {
  htmlFor: string;
  content: string;
}

function InputLabel({ htmlFor, content }: InputLabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {content}
    </label>
  );
}

export default InputLabel;
