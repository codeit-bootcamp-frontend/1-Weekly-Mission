import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as S from "./SignFormStyles";
import { SignupForm } from "@/types/form";
import { isUsableEmail, signupUser } from "@/common/api";

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setFocus,
    formState: { errors, isValid },
  } = useForm<SignupForm>({ mode: "onBlur" });

  // SWR로 mutation 하는 방법들 => 적용전이어서 주석처리
  // const { data, mutate } = useSWR("/api/sign-up");
  // const { mutate } = useSWRConfig();
  // const { trigger, isMutating } = useSWRMutation(url, sendRequest, /* options */)

  const IconPath = "on";

  const onSubmitSignUp = async (data: SignupForm) => {
    try {
      const user = await signupUser({
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("accessToken", user.data.accessToken);
      router.push("/folder");
    } catch (error) {
      console.log(error);
    }
  };

  const validateUsableEmail = async () => {
    const email = getValues("email");
    try {
      const result = await isUsableEmail({ email });
      return result.data ? true : result.error.message;
    } catch (error) {
      console.log(error);
    }
  };

  const validatePasswordCheck = (value: string) => {
    const password = getValues("password");
    return value === password || "비밀번호가 일치하지 않아요.";
  };

  // focus on email input
  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  // console.log(isValid);
  // console.log(!!errors.email);

  return (
    <S.Form onSubmit={handleSubmit(onSubmitSignUp)}>
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
          validate: validateUsableEmail,
        })}
      />
      {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
      <S.Label>비밀번호</S.Label>
      <S.InputWrapper>
        <S.Input
          type="password"
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          autoComplete="off"
          $isErrorStyle={!!errors.password}
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
          $isErrorStyle={!!errors.passwordCheck}
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
