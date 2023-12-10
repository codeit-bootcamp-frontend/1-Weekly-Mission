import * as S from '@/styles/SignUp.styled';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import logoImage from '@/public/images/logo.svg';
import googleIcon from '@/public/images/googleIcon.svg';
import kakaotalkIcon from '@/public/images/kakaotalkIcon.svg';
import eyeOn from '@/public/images/eyeOn.svg';
import eyeOff from '@/public/images/eyeOff.svg';

interface InputForm {
  email: string;
  password: string;
  passwordCheck: string;
}

export default function SignUp() {
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { 
    register, 
    handleSubmit: onSubmit,
    formState:{ errors },
    getValues,
  } = useForm<InputForm>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      passwordCheck: "",
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

  return(
    <S.Container>
      <S.Wrapper>
        <Image src={logoImage} width={210} height={38} alt="로고이미지" />
        <S.Header>
          이미 회원이신가요? <S.LinkText>
            <Link href="/signin">로그인 하기</Link>
          </S.LinkText>
        </S.Header>
        <S.SignUpForm onSubmit={onSubmit(handleSubmit)}>
          <S.SignUpContainer>
            <S.InputContainer>
              <S.Label htmlFor="email">이메일</S.Label>
              <S.Input
                id="email"
                type="email"
                placeholder="이메일을 입력해 주세요."
                {...register("email", {
                  required: {
                    value: true,
                    message: "이메일을 입력해 주세요.",
                  },
                  pattern: {
                    value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: "올바른 이메일 주소가 아닙니다.",
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
                  placeholder="비밀번호를 입력해 주세요."
                  {...register("password", {
                    required: {
                      value: true,
                      message: "비밀번호를 입력해 주세요.",
                    },
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
                      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
                    },
                  })}
                />
                <S.VisibleButton onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  setIsError((prev) => !prev);
                  setShowPassword((prev) => !prev);
                }
                }>
                  {isError ? (
                    <Image fill src={eyeOn} alt="비밀번호 보이기" />
                  ) : (
                    <Image fill src={eyeOff} alt="비밀번호 숨기기" />
                  )}
                </S.VisibleButton>
              </S.PasswordContainer>
              {errors.password ? <S.ErrorText>{errors.password.message}</S.ErrorText> : null}
            </S.InputContainer>
            <S.InputContainer>
              <S.Label htmlFor="passwordCheck">비밀번호 확인</S.Label>
              <S.PasswordContainer>
                <S.Input
                  id="passwordCheck"
                  type={
                    showPassword ? "text" : "password"
                  }
                  placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                  {...register("passwordCheck", {
                    required: {
                      value: true,
                      message: "비밀번호가 일치하지 않아요.",
                    },
                    validate: (value) => {
                      const { password } = getValues();
                      return password === value || "비밀번호가 일치하지 않아요.";
                    }
                  })}
                />
                <S.VisibleButton onClick={handleVisibility}>
                  {isError ? (
                    <Image fill src={eyeOn} alt="비밀번호 보이기" />
                  ) : (
                    <Image fill src={eyeOff} alt="비밀번호 숨기기" />
                  )}
                </S.VisibleButton>
              </S.PasswordContainer>
              {errors.passwordCheck ? <S.ErrorText>{errors.passwordCheck.message}</S.ErrorText> : null}
            </S.InputContainer>
          </S.SignUpContainer>
          <Button>회원가입</Button>
        </S.SignUpForm>
        <S.SnsContainer>
          <S.SnsText>다른 방식으로 가입하기</S.SnsText>
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
