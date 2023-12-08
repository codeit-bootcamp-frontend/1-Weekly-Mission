import { ReactNode, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import styles from "./SignInLayout.module.scss";
import classNames from "classnames/bind";
import EyeOnIcon from "@/public/images/eye-on.svg";
import EyeOffIcon from "@/public/images/eye-off.svg";
import { axiosInstance } from "@/src/sharing/util";
import { useRouter } from "next/router";

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
  socialContainer,
}: SignInLayoutProps) => {
  const [signInError, setSignInError] = useState<boolean>(false);
  const { register, handleSubmit, formState, control, getValues, clearErrors } =
    useForm<any>();
  const { errors }: any = formState;
  const router = useRouter();

  const onSubmit = async () => {
    try {
      const res = await axiosInstance.post("sign-in", {
        email: getValues("email"),
        password: getValues("password"),
      });
      if (res.status === 200) {
        const {
          data: {
            data: { accessToken },
          },
        } = res;
        localStorage.setItem("signInToken", accessToken);
        router.push("/folder");
      }
    } catch (error) {
      setSignInError(true);
      console.log(error);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const inputType = useMemo(
    () => (isPasswordVisible ? "text" : "password"),
    [isPasswordVisible]
  );
  const EyeIcon = useMemo(
    () => (
      <div
        className={cx("eye_button")}
        onClick={(e) => {
          e.preventDefault();
          setIsPasswordVisible(!isPasswordVisible);
        }}
      >
        {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
      </div>
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
                className={cx("input", { error: errors?.email || signInError })}
                {...register("email", {
                  onChange: () => {
                    setSignInError(false);
                  },
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
              {signInError && (
                <p className={cx("helper-text")}>이메일을 확인해주세요</p>
              )}
            </div>
            <div className={cx("part")}>
              <label className={cx("label")} id="password">
                비밀번호
              </label>
              <div className={cx("password_container")}>
                <input
                  type={inputType}
                  className={cx("input", {
                    error: errors?.password || signInError,
                  })}
                  {...register("password", {
                    onChange: () => {
                      setSignInError(false);
                    },
                    required: "비밀번호를 입력해주세요",
                  })}
                />
                {EyeIcon}
              </div>
              {errors.password && (
                <p className={cx("helper-text")}>{errors.password.message}</p>
              )}
              {signInError && (
                <p className={cx("helper-text")}>비밀번호를 확인해주세요</p>
              )}
            </div>
            <button type="submit" className={cx("button")}>
              로그인
            </button>
          </form>
          <div className={cx("social_container")}>{socialContainer}</div>
        </div>
      </div>
    </>
  );
};
