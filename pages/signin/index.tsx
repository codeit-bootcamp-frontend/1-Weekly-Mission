import { useForm, Form } from "react-hook-form";
import { BASE_URL } from "@/src/config";
import { postSignIn } from "@/src/api/postSignIn";
import SignInput from "@/src/components/Sign/SignInput";
import SocialSign from "@/src/components/Sign/SocialSign";
import SignHeader from "@/src/components/Sign/SignHeader";
import style from "./sign.module.css";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
const SignIn = () => {
  const {
    register,
    control,
    formState: { errors },
    setError,
    getValues,
  } = useForm({ mode: "onBlur" });

  const router = useRouter();
  let token = useRef<string | null>();
  useEffect(() => {
    token.current = localStorage.getItem("accessToken");
    if (token.current) router.push("/");
  }, []);

  return (
    token.current || (
      <div className={style.root}>
        <div className={style.container}>
          <SignHeader
            message="회원이 아니신가요? "
            href="/signup"
            linkMessage="회원 가입하기"
          />
          <Form
            className={style.form}
            action={`${BASE_URL}/sign-in`}
            onSubmit={async () => {
              postSignIn({
                email: getValues("email"),
                password: getValues("password"),
              });
            }}
            onError={() => {
              setError(
                "email",
                { message: "이메일을 확인해주세요." },
                { shouldFocus: true }
              );
              setError(
                "password",
                { message: "비밀번호를 확인해주세요." },
                { shouldFocus: true }
              );
            }}
            control={control}
          >
            <SignInput
              label="이메일"
              name="email"
              type="email"
              placeholder="이메일을 입력해 주세요."
              register={register}
              rules={{
                required: "이메일을 입력해 주세요.",
                pattern: {
                  value: /^[A-Za-z0-9\-]+@[A-Za-z0-9]+\.[a-z]/,
                  message: "올바른 이메일 주소가 아닙니다.",
                },
              }}
              errors={errors}
            />
            <SignInput
              label="비밀번호"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              register={register}
              rules={{
                required: "비밀번호를 입력해 주세요.",
              }}
              errors={errors}
            />

            <button className={style.formButton}>로그인</button>
          </Form>
          <SocialSign message="소셜 로그인" />
        </div>
      </div>
    )
  );
};

export default SignIn;
