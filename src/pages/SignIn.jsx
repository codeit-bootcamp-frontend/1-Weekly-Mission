import styles from "../styles/signin.module.css";
import classNames from "classnames/bind";
import Input from "../../components/input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "../lib/axiosInstance";
import { ERROR_MESSAGE, INPUT_TYPE, REG_EMAIL } from "../util/constant";
const cx = classNames.bind(styles);

export default function SignIn() {
  const form = useForm({ mode: "onBlur" });
  const { handleSubmit, control, formState } = form;
  const { isSubmitting } = formState;
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    const res = await axios.post("/sign-in", {
      email: e.email,
      password: e.password,
    });

    if (res.status === 200) {
      const { accessToken, refreshToken } = res.data.data;
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      navigate("/folder");
    }
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
          회원이 아니신가요? <Link to="/signup">회원 가입하기</Link>
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
                    placeholder={INPUT_TYPE.password.placeholder.signIn}
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
