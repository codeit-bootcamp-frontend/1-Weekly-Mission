import { useForm } from "react-hook-form";
import { Input } from "../input/Input";
import PasswordInput from "../passwordInput/PasswordInput";
import styles from "./SignupForm.module.css";
import Button from "../button/Button";
import { SIGNUP_ENDPOINT, instance } from "@/api/services/config";
import { useRouter } from "next/router";
import { loadAccessToken } from "@/utils/localStorage";
import { emailPattern, passwordPattern } from "@/constants/authConstant";

export interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export function SignupForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = handleSubmit(async (data: FormValues) => {
    const res = await instance.post(`${SIGNUP_ENDPOINT}`, {
      email: data.email,
      password: data.password,
    });
    const accessToken = res.data.data.accessToken;
    loadAccessToken(accessToken);
    res.status === 200 && router.push("/folder");
  });

  const { password } = getValues();

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
              pattern: passwordPattern,
            }}
            register={register}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="passwordConfirm" className={styles.label}>
            비밀번호 확인
          </label>
          <PasswordInput
            placeholder="비밀번호와 일치하는 값을 입력해 주세요"
            hasEyeIcon
            inputName="passwordConfirm"
            register={register}
            rules={{
              validate: (fieldValue: string) => {
                return fieldValue === password || "비밀번호가 같지 않습니다.";
              },
            }}
            helperText={errors.passwordConfirm?.message}
            hasError
          />
        </div>
        <Button type="submit" className={styles.ctaButton}>
          회원가입
        </Button>
      </form>
    </>
  );
}
