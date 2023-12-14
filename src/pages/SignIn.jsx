import styles from "../styles/signin.module.css";
import classNames from "classnames/bind";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
const cx = classNames.bind(styles);

const INPUT_TYPE = {
  email: { type: "email", placeholder: "이메일을 입력해주세요." },
  password: { type: "password", placeholder: "비밀번호를 입력해주세요." },
};

const REG_EMAIL = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const ERROR_MESSAGE = {
  emailRequired: "이메일을 입력해 주세요.",
  emailInvalid: "올바른 이메일 주소가 아닙니다.",
  emailCheck: "이메일을 확인해 주세요.",
  passwordRequired: "비밀번호를 입력해 주세요.",
  passwordInvalid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  passwordCheck: "비밀번호를 확인해 주세요.",
};
export default function SignIn() {
  const form = useForm({ mode: "onBlur" });
  const { handleSubmit, control, formState } = form;
  const { isSubmitting } = formState;

  const onSubmit = async (e) => {
    const postData = { email: e.email, password: e.password };
    console.log(postData);
    await axios.post("https://bootcamp-api.codeit.kr/api/sign-in", {
      email: "codeit@codeit.com",
      password: "sprint101",
    });
  };

  return (
    <main className={cx("signin-main")}>
      <div className={cx("logo-and-signup")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src="images/signin/logo.svg" />
          </Link>
        </div>
        <span>
          회원이 아니신가요? <Link to="signup.html">회원 가입하기</Link>
        </span>
      </div>

      <div className={cx("input-frame")}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={cx("input-box")}>
            <label htmlFor="email">이메일</label>
            <Controller
              control={control}
              name="email"
              rules={{
                required: { value: true, message: ERROR_MESSAGE.emailRequired },
                pattern: {
                  value: REG_EMAIL,
                  message: ERROR_MESSAGE.emailInvalid,
                },
              }}
              render={({ field, fieldState }) => (
                // field에는 disable, name, onBlur, onChange, ref, value 존재
                // fieldState에는 error, invalid, isDirty, isTouched 존재
                <Input
                  {...field}
                  type={INPUT_TYPE.email.type}
                  placeholder={INPUT_TYPE.email.placeholder}
                  hasError={Boolean(fieldState.error)}
                  errorText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className={cx("input-box")}>
            <label htmlFor="password">비밀번호</label>
            <div className={cx("password")}>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: {
                    value: true,
                    message: ERROR_MESSAGE.passwordRequired,
                  },
                }}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    type={INPUT_TYPE.password.type}
                    placeholder={INPUT_TYPE.password.placeholder}
                    hasError={Boolean(fieldState.error)}
                    errorText={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </div>

          <button
            disabled={isSubmitting}
            className={cx("login-button", "flex-center")}
            type="submit"
          >
            로그인
          </button>
        </form>
        <DevTool control={control} />
      </div>

      <div className={cx("social-login")}>
        <span>소셜 로그인</span>
        <div className={cx("icons")}>
          <Link to="https://www.google.com/">
            <img src="images/signin/google.png" />
          </Link>
          <Link to="https://www.kakaocorp.com/page/">
            <img src="images/signin/kakaotalk.png" />
          </Link>
        </div>
      </div>
    </main>
  );
}
