import * as S from "@/styles/SignIn.styled";
import Link from "next/link";
import Image from 'next/image';
import logoImage from "@/public/images/logo.svg";
import InputForm from "@/components/InputForm";
import Button from "@/components/Button";
import { useForm } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';
import googleIcon from '@/public/images/googleIcon.svg';
import kakaotalkIcon from '@/public/images/kakaotalkIcon.svg';
import eyeOn from '@/public/images/eyeOn.svg';
import eyeOff from '@/public/images/eyeOff.svg';

interface InputForm {
  email: string;
  password: string;
}

export default function SignIn() {
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { 
    register, 
    handleSubmit: onSubmit,
    formState:{ errors },
  } = useForm<InputForm>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleVisibility = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsError((prev) => !prev);
    setShowPassword((prev) => !prev);
  }

  const handleSubmit = (data: InputForm) => {
    console.log(data);
  }

  return (
    <S.Container>
      <S.Wrapper>
        <Image src={logoImage} width={210} height={38} alt="로고이미지" />
        <S.Header>
          회원이 아니신가요? <S.LinkText>
            <Link href="/signup">회원 가입하기</Link>
          </S.LinkText>
        </S.Header>
        <S.SignInForm onSubmit={onSubmit(handleSubmit)}>
          <S.SignInContainer>
            <S.InputContainer>
              <S.Label htmlFor="email">이메일</S.Label>
              <S.Input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: "올바른 이메일 주소가 아닙니다",
                  },
                })}
              />
              {errors.email ? <S.ErrorText>{errors.email.message}</S.ErrorText> : null}
            </S.InputContainer>
            <S.InputContainer>
              <S.Label htmlFor="password">비밀번호</S.Label>
              <S.PasswordContainer>
                <S.Input
                  id="password"
                  type={
                    showPassword ? "text" : "password"
                  }
                  placeholder="비밀번호를 입력해 주세요"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요."},
                  )}
                />
                
                  <S.VisibleButton onClick={handleVisibility}>
                    {isError ? (
                      <Image fill src={eyeOn} alt="비밀번호 보이기" />
                    ) : (
                      <Image fill src={eyeOff} alt="비밀번호 숨기기" />
                    )}
                  </S.VisibleButton>
              </S.PasswordContainer>
              {errors.password ? <S.ErrorText>{errors.password.message}</S.ErrorText> : null}
            </S.InputContainer>
          </S.SignInContainer>
          <Button>로그인</Button>
        </S.SignInForm>
        <S.SnsContainer>
          <S.SnsText>소셜 로그인</S.SnsText>
          <S.SnsIconContainer>
            <S.SnsIconWrapper
              href="https://www.google.com"
              target="_blank"
            >
              <Image
                fill 
                src={googleIcon} 
                alt="구글 페이지로 이동"
              />
            </S.SnsIconWrapper>
            <S.SnsIconWrapper
              href="https://www.kakaocorp.com/page"
              target="_blank"
            >
              <Image
                fill 
                src={kakaotalkIcon} 
                alt="카카오톡으로 이동"
              />
            </S.SnsIconWrapper>
          </S.SnsIconContainer>
        </S.SnsContainer>
      </S.Wrapper>
    </S.Container>
  );
}
