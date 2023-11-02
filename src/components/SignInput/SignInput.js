import styles from './SignInput.module.css';
import useEyesValue from '../../hooks/useEyesValue';

function SignInput({
  idfor,
  name,
  type,
  value,
  children,
  errorText,
  onChange,
  onBlur,
  onFocus,
  eyes,
}) {
  const [eyesValue, handleEyesClick, eyesStyle] = useEyesValue();

  if (eyesValue) {
    type = 'text';
  }

  const borderControl = `${styles.input} ${
    errorText ? styles.errorBorder : ''
  }`;

  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={idfor}>
        {children}
      </label>
      <div className={borderControl} onBlur={onBlur} onFocus={onFocus}>
        <input
          onChange={onChange}
          value={value}
          className={styles.container}
          id={idfor}
          name={name}
          type={type}
          autoComplete="off"
        />
        {eyes && (
          <button
            className={eyesStyle}
            onClick={handleEyesClick}
            type="button"
          ></button>
        )}
      </div>
      {errorText && <div className={styles.errorMessage}>{errorText}</div>}
    </div>
  );
}

export default SignInput;
