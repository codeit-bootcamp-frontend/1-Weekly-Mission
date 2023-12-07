import { ReactNode, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styles from "./SignInLayout.module.scss";
import classNames from "classnames/bind";
import EyeOnIcon from "@/public/images/eye-on.svg";
import EyeOffIcon from "@/public/images/eye-off.svg";

let renderCount = 0;

const cx = classNames.bind(styles);

type SignInLayoutProps = {
  titleContainer: ReactNode;
  input: ReactNode;
  passwordInput: ReactNode;
  socialContainer: ReactNode;
  handleSubmit: any;
};

export const SignInLayout = ({
  titleContainer,
  input,
  passwordInput,
  socialContainer,
}: SignInLayoutProps) => {
  const onSubmit = (data: any) => {
    console.log("Form submitted.", data);
  };

  const { register, handleSubmit, formState, control } = useForm<any>();
  const { errors }: any = formState;

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
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
                  })}
                />
                {EyeIcon}
              </div>
              {errors.password && (
                <p className={cx("helper-text")}>{errors.password.message}</p>
              )}
            </div>
            <button type="submit" className={cx("button")}>
              로그인
            </button>
          </form>
          {/* <DevTool control={control} /> */}
          <div className={cx("social_container")}>{socialContainer}</div>
        </div>
      </div>
    </>
  );
};
