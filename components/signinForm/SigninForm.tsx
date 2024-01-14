import { useForm } from "react-hook-form";
import { Input } from "../input/Input";
import PasswordInput from "../passwordInput/PasswordInput";
import styles from "./SignInForm.module.css";
import Button from "../button/Button";
import { useRouter } from "next/router";
import axios from "axios";
import {
  CHECK_EMAIL_TEXT,
  CHECK_PW_TEXT,
  EMAIL_PATTERN,
  PASSWORD_PATTERN,
} from "@/constants/authConstant";
import {
  SIGNIN_ENDPOINT,
  USERS_ENDPOINT,
  instance,
} from "@/api/services/config";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "@/utils/localStorage";
import useUserStore from "@/hooks/useStore";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

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
    watch,
  } = useForm<FormValues>({ mode: "onBlur" });

  const queryClient = new QueryClient();
  const { setUser } = useUserStore();

  const getUser = async () => {
    try {
      const res = await instance.get(USERS_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
      const nextUser = res?.data;
      setUser(nextUser);
    } catch (error) {
      console.error(error);
    }
  };

  const postSignin = async () => {
    const res = await instance.post(`/auth/sign-in`, {
      email: watch("email"),
      password: watch("password"),
    });
    const accessToken = res?.data.accessToken;
    const refreshToken = res?.data.refreshToken;
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    await getUser();
    if (res.status === 200) {
      router.push("/folder");
    }
  };

  const signinMutation = useMutation({
    mutationFn: postSignin,
  });

  const onSubmit = handleSubmit(async (data: FormValues) => {
    try {
      signinMutation.mutate();
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
      <form className={styles.form} noValidate onSubmit={onSubmit}>
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
