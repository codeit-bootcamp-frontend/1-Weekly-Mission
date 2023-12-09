import { Input } from "../input/Input";
import PasswordInput from "../passwordInput/PasswordInput";
import styles from "./SignupForm.module.css";

function SignupForm() {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="email">이메일</label>
        <Input placeholder="이메일을 입력해 주세요" type="text" />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <PasswordInput
          placeholder="영문,숫자를 조합해 8자 이상 입력해 주세요"
          hasEyeIcon
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <PasswordInput
          placeholder="비밀번호와 일치하는 값을 입력해 주세요"
          hasEyeIcon
        />
      </div>
    </form>
  );
}

export default SignupForm;
