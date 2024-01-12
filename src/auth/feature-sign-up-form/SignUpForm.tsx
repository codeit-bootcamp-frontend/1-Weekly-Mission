import { Input } from "@/src/sharing/ui-input";
import { PasswordInput } from "@/src/sharing/ui-password-input";
import { Controller, useForm } from "react-hook-form";
import { useCheckEmailDuplicate, useSignUp } from "../data-access-auth";
import { ERROR_MESSAGE, PLACEHOLDER } from "./constant";
import styles from "./SignUpForm.module.scss";
import classNames from "classnames/bind";
import { Cta } from "@/src/sharing/ui-cta";
import { useTokenRedirect } from "../util-use-token-redirect";

const cx = classNames.bind(styles);

export const SignUpForm = () => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { email: "", password: "", confirmedPassword: "" },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const { execute: checkEmailDuplicate } = useCheckEmailDuplicate(watch("email"));
  const { execute: signUp, data } = useSignUp({
    email: watch("email"),
    password: watch("password"),
  });

  useTokenRedirect(data?.data.accessToken);

  return (
    <form className={cx("form")} onSubmit={handleSubmit(signUp)}>
      <div className={cx("input-box")}>
        <label className={cx("label")}>이메일</label>
        <Controller
          control={control}
          name="email"
          rules={{
            required: ERROR_MESSAGE.emailRequired,
            pattern: { value: /\S+@\S+\.\S+/, message: ERROR_MESSAGE.emailInvalid },
            validate: {
              alreadyExist: async () => {
                const response = await checkEmailDuplicate();
                if (!response?.data?.data.isUsableNickname) {
                  return ERROR_MESSAGE.emailAlreadyExist;
                }
                return true;
              },
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder={PLACEHOLDER.email}
              hasError={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className={cx("input-box")}>
        <label className={cx("label")}>비밀번호</label>
        <Controller
          control={control}
          name="password"
          rules={{
            required: ERROR_MESSAGE.passwordInvalid,
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
              message: ERROR_MESSAGE.passwordInvalid,
            },
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              hasEyeIcon
              placeholder={PLACEHOLDER.password}
              hasError={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className={cx("input-box")}>
        <label className={cx("label")}>비밀번호 확인</label>
        <Controller
          control={control}
          name="confirmedPassword"
          rules={{
            validate: {
              isMatch: (value) => {
                if (value !== watch("password")) {
                  return ERROR_MESSAGE.confirmedPasswordNotMatch;
                }
                return true;
              },
            },
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              hasEyeIcon
              placeholder={PLACEHOLDER.confirmedPassword}
              hasError={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>
      <button className={cx("button")} type="submit">
        <Cta>회원가입</Cta>
      </button>
    </form>
  );
};
