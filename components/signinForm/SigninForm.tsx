import { useForm } from "react-hook-form";
import { Input } from "../input/Input";
import PasswordInput from "../passwordInput/PasswordInput";
import styles from "./SignInForm.module.css";
import Button from "../button/Button";
import { SIGNIN_ENDPOINT, instance } from "@/api/services/config";
import { useRouter } from "next/router";
import { loadAccessToken } from "@/utils/localStorage";
import { useState } from "react";
import axios from "axios";
import {
  checkEmailText,
  checkPwText,
  emailPattern,
  passwordPattern,
} from "@/constants/authConstant";

export interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export function SigninForm() {
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = handleSubmit(async (data: FormValues) => {
    let res;
    try {
      res = await instance.post(`${SIGNIN_ENDPOINT}`, {
        email: data.email,
        password: data.password,
      });
      const accessToken = res?.data.data.accessToken;
      loadAccessToken(accessToken);
      res?.status === 200 && router.push("/folder");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        setEmailHelperText(checkEmailText);
        setPasswordHelperText(checkPwText);
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
              pattern: emailPattern,
            }}
            hasError
            helperText={errors.email?.message || emailHelperText}
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
            helperText={errors.password?.message || passwordHelperText}
            rules={{
              required: "비밀번호를 입력해주세요.",
              pattern: passwordPattern,
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
