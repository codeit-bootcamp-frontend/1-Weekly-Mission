import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "./SignFormStyles";

interface SignupForm {
  email: string;
  password: string;
  passwordCheck: string;
}

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    setFocus,
    formState: { errors, isValid },
  } = useForm<SignupForm>({ mode: "onBlur" });

  const IconPath = "on";

  const onSubmitSignUp = (data: SignupForm) => {
    // try...catch
    console.log(data);
  };

  const validatePasswordCheck = (value: string) => {
    const password = getValues("password");
    return value === password || "비밀번호가 일치하지 않아요.";
  };

  // focus on email input
  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  console.log(isValid);

  return (
    <S.Form onSubmit={handleSubmit(onSubmitSignUp)}>
      <S.Label>이메일</S.Label>
      <S.Input
        type="text"
        placeholder="이메일을 입력해주세요."
        autoComplete="off"
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
          type="password"
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          autoComplete="off"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/i,
              message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
            },
          })}
        />
        <S.EyeIcon id="masking" src={`/assets/eye-${IconPath}.svg`} alt="비밀번호 마스킹표시" />
      </S.InputWrapper>
      {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
      <S.Label>비밀번호 확인</S.Label>
      <S.InputWrapper>
        <S.Input
          type="password"
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          autoComplete="off"
          {...register("passwordCheck", {
            required: "비밀번호를 한번 더 입력해주세요.",
            validate: validatePasswordCheck,
          })}
        />
        <S.EyeIcon id="masking" src={`/assets/eye-${IconPath}.svg`} alt="비밀번호 마스킹표시" />
      </S.InputWrapper>
      {errors.passwordCheck && <S.ErrorMessage>{errors.passwordCheck.message}</S.ErrorMessage>}
      <S.FormButton>회원가입</S.FormButton>
    </S.Form>
  );
}
