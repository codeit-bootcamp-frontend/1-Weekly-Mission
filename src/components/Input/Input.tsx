import Image from "next/image";
import { useEffect, useState } from "react";
import eyeOffImg from "src/assets/icon/eye-off.svg";
import eyeOnImg from "src/assets/icon/eye-on.svg";
import styles from "src/components/Input/Input.module.css";
import { INPUT_TYPE } from "src/constants/input";
import { validateEmail } from "src/utils/inputValidate";

interface Input {
  id: string;
  type: string;
  placeholder: string;
  status: number;
  account: {};
  setAccount: any;
}

function Input({ id, type, placeholder, status, account, setAccount }: Input) {
  const [isVisible, setIsVisible] = useState(true);
  const [isError, setIsError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const { email, password } = INPUT_TYPE;

  const visiblePassword = () => {
    setIsVisible((prev) => !prev);
  };

  const handleCheck = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsError(true);
    }
    if (!e.target.value) {
      setIsError(false);
      switch (type) {
        case "email":
          setErrorMsg(email.errorMsg1);
          break;
        case "password":
          setErrorMsg(password.errorMsg1);
          break;
      }
    } else if (type === "email" && !validateEmail(e.target.value)) {
      setIsError(false);
      setErrorMsg(email.errorMsg2);
    }
  };

  const onChangeAccount = (e: any) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (status === 400) {
      setIsError(false);
      switch (type) {
        case "email":
          setErrorMsg(email.errorMsg1);
          break;
        case "password":
          setErrorMsg(password.errorMsg1);
          break;
      }
    }
  }, [status]);

  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        name={type}
        type={isVisible ? "text" : "password"}
        className={isError ? styles.input : styles.errorInput}
        placeholder={placeholder}
        onBlur={handleCheck}
        onChange={onChangeAccount}
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
