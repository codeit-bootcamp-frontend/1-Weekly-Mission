import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as S from "./SignFormStyles";
import { SignupForm } from "@/types/form";
import { signinUser } from "@/common/api";
// import EmailInput from "./inputs/EmailInput";

export default function SigninForm() {
  const router = useRouter();
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const {
    register,
    handleSubmit,
    // getValues,
    setError,
    setFocus,
    formState: { errors, isValid },
  } = useForm<SignupForm>({ mode: "onBlur" });

  const inputContentsType = isHiddenPassword ? "password" : "text";
  const IconPath = isHiddenPassword ? "off" : "on";

  const onSubmitSignIn = async (data: SignupForm) => {
    try {
      const result = await signinUser({
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("accessToken", result.data.accessToken);
      router.push("/folder");
    } catch (error) {
      setError("email", { message: "이메일을 확인해 주세요." });
      setError("password", { message: "비밀번호를 확인해 주세요." });
    }
  };

  const toggleVisiblePassword = (e: MouseEvent<HTMLImageElement>) => {
    setIsHiddenPassword((prev) => !prev);
  };

  // focus on email input
  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <S.Form onSubmit={handleSubmit(onSubmitSignIn)}>
      {/* <EmailInput register={register} getValues={getValues} errors={errors} /> */}
      <S.Label>이메일</S.Label>
      <S.Input
        type="text"
        placeholder="이메일을 입력해주세요."
        autoComplete="off"
        $isErrorStyle={!!errors.email}
        {...register("email", {
          required: "이메일을 입력해주세요.",
          pattern: {
            value: /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i,
            message: "올바른 이메일 주소가 아닙니다.",
          },
        })}
      />
      {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
      <S.Label>비밀번호</S.Label>
      <S.InputWrapper>
        <S.Input
          type={inputContentsType}
          placeholder="비밀번호를 입력해 주세요."
          autoComplete="off"
          $isErrorStyle={!!errors.password}
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
        />
        <S.EyeIcon
          onClick={toggleVisiblePassword}
          src={`/assets/eye-${IconPath}.svg`}
          alt="비밀번호 마스킹표시"
        />
      </S.InputWrapper>
      {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
      <S.FormButton>로그인</S.FormButton>
    </S.Form>
  );
}
