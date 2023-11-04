import styles from './SignInput.module.css';
import useEyesValue from '../../hooks/useEyesValue';
import InputBox from '../InputBox/InputBox';

function SignInput({
  idfor,
  name,
  type,
  value,
  label,
  errorText,
  onChange,
  onBlur,
  onFocus,
  eyes,
}) {
  const { eyesValue, handleEyesClick, eyesStyle } = useEyesValue();

  if (eyesValue) {
    type = 'text';
  }

  const inputBoxPropConfig = {
    label,
    for: idfor,
    onBlur,
    onFocus,
    errorText,
  };

  const inputPropConfig = {
    onChange,
    value,
    className: styles.input,
    id: idfor,
    name,
    type,
  };

  return (
    <InputBox {...inputBoxPropConfig}>
      <input autoComplete="off" {...inputPropConfig} />
      {eyes && (
        <button
          className={eyesStyle}
          onClick={handleEyesClick}
          type="button"
        ></button>
      )}
    </InputBox>
  );
}

export default SignInput;
