import styles from "../styles/signin.module.css";
import classNames from "classnames/bind";
import Input from "../../components/input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "../lib/axiosInstance";
import {
  ERROR_MESSAGE,
  INPUT_TYPE,
  REG_EMAIL,
  REG_PASSWORD,
} from "../util/constant";

const cx = classNames.bind(styles);
export default function SignUp() {
  const form = useForm({ mode: "onBlur" });
  const { handleSubmit, control, formState, getValues } = form;
  const { isSubmitting } = formState;
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    const res = await axios.post("/sign-up", {
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
          이미 회원이신가요? <Link to="/signin">회원 가입하기</Link>
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
                validate: {
                  isDuplicatedEmail: async (value) => {
                    try {
                      await axios.post("/check-email", {
                        email: value,
                      });
                    } catch (error) {
                      if (error.response.status === 409) {
                        return error.response.data.error.message;
                      }
                    }
                  },
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
                  pattern: {
                    value: REG_PASSWORD,
                    message: ERROR_MESSAGE.passwordInvalid,
                  },
                }}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    type={INPUT_TYPE.password.type}
                    placeholder={INPUT_TYPE.password.placeholder.signUp}
                    hasError={Boolean(fieldState.error)}
                    errorText={fieldState.error?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className={cx("input-box")}>
            <label htmlFor="password">비밀번호 확인</label>
            <div className={cx("password")}>
              <Controller
                control={control}
                name="passwordCheck"
                rules={{
                  required: {
                    value: true,
                    message: ERROR_MESSAGE.passwordRequired,
                  },
                  validate: {
                    checkMatchPassword: (value) => {
                      if (getValues("password") != value) {
                        return ERROR_MESSAGE.passwordNotMatch;
                      }
                    },
                  },
                }}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    type={INPUT_TYPE.passwordCheck.type}
                    placeholder={INPUT_TYPE.passwordCheck.placeholder}
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
            회원가입
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
