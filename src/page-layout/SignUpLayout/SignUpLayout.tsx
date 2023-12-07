import { ReactNode, useState, useMemo } from "react";
import styles from "./SignUpLayout.module.scss";
import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import EyeOnIcon from "@/public/images/eye-on.svg";
import EyeOffIcon from "@/public/images/eye-off.svg";

const cx = classNames.bind(styles);

type SignUpLayoutProps = {
  titleContainer: ReactNode;
  input: ReactNode;
  passwordInput: ReactNode;
  re_passwordInput: ReactNode;
  socialContainer: ReactNode;
};

export const SignUpLayout = ({
  titleContainer,
  input,
  passwordInput,
  re_passwordInput,
  socialContainer,
}: SignUpLayoutProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const onSubmit = (data: any) => {
    console.log("Form submitted.", data);
  };
  const { register, handleSubmit, formState, getValues } = useForm<any>();
  const { errors }: any = formState;

  const inputType = useMemo(
    () => (isPasswordVisible ? "text" : "password"),
    [isPasswordVisible]
  );
  const EyeIcon = useMemo(
    () => (
      <button
        className={cx("eye_button")}
        onClick={(e) => {
          e.preventDefault();
          setIsPasswordVisible(!isPasswordVisible);
        }}
      >
        {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
      </button>
    ),
    [isPasswordVisible]
  );

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("logo_container")}>{titleContainer}</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cx("part")}>
              <label className={cx("label")} id="email">
                이메일
              </label>
              <input
                className={cx("input", { error: errors?.email })}
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                    message: "올바른 이메일 주소가 아닙니다.",
                  },
                })}
              />
              {errors.email && (
                <p className={cx("helper-text")}>{errors.email?.message}</p>
              )}
            </div>
            <div className={cx("part")}>
              <label className={cx("label")} id="password">
                비밀번호
              </label>
              <div className={cx("password_container")}>
                <input
                  type={inputType}
                  className={cx("input", { error: errors?.password })}
                  {...register("password", {
                    required: "비밀번호를 입력해주세요",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/,
                      message:
                        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
                    },
                  })}
                />
                {EyeIcon}
              </div>
              {errors.password && (
                <p className={cx("helper-text")}>{errors.password.message}</p>
              )}
            </div>
            <div className={cx("part")}>
              <label className={cx("label")} id="re_password">
                비밀번호 확인
              </label>
              <div className={cx("password_container")}>
                <input
                  type={inputType}
                  className={cx("input", { error: errors?.passwordConfirm })}
                  {...register("passwordConfirm", {
                    required: "비밀번호를 입력해주세요",
                    validate: {
                      check: (val) => {
                        if (getValues("password") !== val) {
                          return "비밀번호가 일치하지 않습니다.";
                        }
                      },
                    },
                  })}
                />
                {EyeIcon}
              </div>
              {errors.password && (
                <p className={cx("helper-text")}>
                  {errors.passwordConfirm?.message}
                </p>
              )}
            </div>
            <button type="submit" className={cx("button")}>
              회원가입
            </button>
          </form>
          <div className={cx("social_container")}>{socialContainer}</div>
        </div>
      </div>
    </>
  );
};
