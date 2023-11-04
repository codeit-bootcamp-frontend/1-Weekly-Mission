import clsx from 'clsx';
import styles from './InputBox.module.css';

function InputBox({ children, label, idfor, onBlur, onFocus, errorText }) {
  const borderControl = clsx(styles.container, errorText && styles.errorBorder);

  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={idfor}>
        {label}
      </label>
      <div className={borderControl} onBlur={onBlur} onFocus={onFocus}>
        {children}
      </div>
      {errorText && <div className={styles.errorMessage}>{errorText}</div>}
    </div>
  );
}

export default InputBox;
