import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import SignPageHeader from "./SignPageHeader";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import styles from "./AuthForm.module.css"; // 스타일 파일 경로
import SignPageSocial from "./SignPageSocial";

interface AuthFormProps<TFormValues extends FieldValues> {
  type: "signIn" | "signUp";
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: FieldValues) => Promise<void>;
  register: UseFormRegister<TFormValues>;
  errors: Record<string, any>;
  validateEmail: (email: string) => Promise<void> | void;
  validatePassword: (password: string) => void;
  validateRePassword?: (rePassword: string) => void;
}

function AuthForm({
  type,
  handleSubmit,
  onSubmit,
  register,
  errors,
  validateEmail,
  validatePassword,
  validateRePassword,
}: AuthFormProps<FieldValues>) {
  const description =
    type === "signIn" ? "회원이 아니신가요?" : "이미 회원이신가요?";
  const href = type === "signIn" ? "/signup" : "/signin";
  const linkText = type === "signIn" ? "회원가입 하기" : "로그인 하기";
  const socialDescription =
    type === "signIn" ? "소셜 로그인" : "다른 방식으로 가입하기";

  return (
    <main className={styles.mainContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.headerContainer}>
          <SignPageHeader
            description={description}
            href={href}
            linkText={linkText}
          />
        </div>

        <div className={styles.inputContainer}>
          <Input
            label="이메일"
            name="email"
            register={register}
            errors={errors}
            onValidate={validateEmail}
          />
          <Input
            label="비밀번호"
            name="password"
            register={register}
            errors={errors}
            onValidate={validatePassword}
            isPassword
          />
          {type === "signUp" && validateRePassword && (
            <Input
              label="비밀번호 확인"
              name="rePassword"
              register={register}
              errors={errors}
              onValidate={validateRePassword}
              isPassword
            />
          )}
        </div>

        <Button size={40}>로그인</Button>
      </form>

      <SignPageSocial socialDescription={socialDescription} />
    </main>
  );
}

export default AuthForm;
