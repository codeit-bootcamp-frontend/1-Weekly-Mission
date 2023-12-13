import { useForm } from "react-hook-form";
import { Input } from "../input/Input";
import PasswordInput from "../passwordInput/PasswordInput";
import styles from "./SignInForm.module.css";
import Button from "../button/Button";
import { SIGNIN_ENDPOINT, instance } from "@/api/services/config";
import { useRouter } from "next/router";
import axios from "axios";
import {
  CHECK_EMAIL_TEXT,
  CHECK_PW_TEXT,
  EMAIL_PATTERN,
  PASSWORD_PATTERN,
} from "@/constants/authConstant";
import { setAccessToken } from "@/utils/localStorage";

export interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export function SigninForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = handleSubmit(async (data: FormValues) => {
    let res;
    try {
      res = await instance.post(`${SIGNIN_ENDPOINT}`, {
        email: data.email,
        password: data.password,
      });
      const accessToken = res?.data.data.accessToken;
      setAccessToken(accessToken);
      res?.status === 200 && router.push("/folder");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        setError("email", { message: CHECK_EMAIL_TEXT });
        setError("password", { message: CHECK_PW_TEXT });
      }
      console.error(error);
    }
  });

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            이메일
          </label>
          <Input
            placeholder="이메일을 입력해 주세요"
            type="text"
            register={register}
            inputName="email"
            rules={{
              required: "이메일을 입력해주세요.",
              pattern: EMAIL_PATTERN,
            }}
            hasError
            helperText={errors.email?.message}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>
            비밀번호
          </label>
          <PasswordInput
            placeholder="영문,숫자를 조합해 8자 이상 입력해 주세요"
            hasEyeIcon
            inputName="password"
            hasError
            helperText={errors.password?.message}
            rules={{
              required: "비밀번호를 입력해주세요.",
              pattern: PASSWORD_PATTERN,
            }}
            register={register}
          />
        </div>
        <Button type="submit" className={styles.ctaButton}>
          로그인
        </Button>
      </form>
    </>
  );
}
