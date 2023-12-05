import Image from "next/image";
import { ChangeEvent, useState } from "react";
import eyeOffImg from "src/assets/icon/eye-off.svg";
import eyeOnImg from "src/assets/icon/eye-on.svg";
import styles from "src/components/Input/Input.module.css";

interface Input {
  type: string;
  placeholder: string;
  errorMsg: string;
}

function Input({ type, placeholder, errorMsg }: Input) {
  const [isVisible, setIsVisible] = useState(true);
  const [isError, setIsError] = useState(true);

  const visiblePassword = () => {
    setIsVisible((prev) => !prev);
  };

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setIsError(!isError);
    } else {
      setIsError(true);
    }
  };

  return (
    <div>
      <input
        type={isVisible ? "text" : "password"}
        name="input"
        className={isError ? styles.input : styles.errorInput}
        placeholder={placeholder}
        onBlur={handleValue}
        onChange={handleValue}
      />
      {isError ? <></> : <p className={styles.errorMsg}>{errorMsg}</p>}
      {type === "email" ? (
        <></>
      ) : (
        <button className={styles.toggleButton} onClick={visiblePassword}>
          <Image
            width={16}
            height={16}
            src={isVisible ? eyeOnImg : eyeOffImg}
            alt="비밀번호 토글 버튼"
            className={styles.toggleImg}
          />
        </button>
      )}
    </div>
  );
}

export default Input;
