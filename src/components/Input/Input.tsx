import Image from "next/image";
import eyeOffImg from "src/assets/icon/eye-off.svg";
import eyeOnImg from "src/assets/icon/eye-on.svg";
import styles from "src/components/Input/Input.module.css";
import { useErrorCheck } from "src/hook/Input/useErrorCheck";
import { usePasswordVisible } from "src/hook/Input/usePasswordVisible";

interface Input {
  id: string;
  type: string;
  placeholder: string;
  status: number;
  account: { email: string; password: string; passwordCheck: string };
  setAccount: any; // 이 부분 어떤 타입으로 해야될지...
}

function Input({ id, type, placeholder, status, account, setAccount }: Input) {
  const { isVisible, visiblePassword } = usePasswordVisible();
  const { isError, errorMsg, handleErrorCheck } = useErrorCheck(
    type,
    status,
    account
  );

  const onChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        name={type}
        type={isVisible ? "text" : "password"}
        className={isError ? styles.input : styles.errorInput}
        placeholder={placeholder}
        onBlur={handleErrorCheck}
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
