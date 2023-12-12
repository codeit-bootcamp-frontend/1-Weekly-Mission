import { useForm, Form } from "react-hook-form";
import { BASE_URL } from "@/src/config";
import SignInput from "@/src/components/Sign/SignInput";
import { isEmailUnique } from "@/src/api/isEmailUnique";
import SocialSign from "@/src/components/Sign/SocialSign";
import SignHeader from "@/src/components/Sign/SignHeader";
import style from "@/pages/signin/sign.module.css";
import { postSignUp } from "@/src/api/postSignUp";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
const SignUp = () => {
  const {
    register,
    control,
    formState: { errors },
    setError,
    getValues,
    clearErrors,
  } = useForm({ mode: "onBlur" });
  const router = useRouter();
  let token = useRef<string | null>();
  useEffect(() => {
    token.current = localStorage.getItem("accessToken");
    console.log(token.current);
    if (token.current) router.push("/");
  }, []);

  return (
    token.current || (
      <div className={style.root}>
        <div className={style.container}>
          <SignHeader
            message="이미 회원이신가요? "
            href="/signin"
            linkMessage="로그인 하기"
          />
          <Form
            className={style.form}
            action={`${BASE_URL}/sign-up`}
            onSubmit={() => {
              postSignUp({
                email: getValues("email"),
                password: getValues("password"),
              });
            }}
            // onSuccess={async ({ response }) => {
            //   const res = await response.json();
            //   localStorage.setItem("accessToken", res?.data.accessToken);
            //   location.href = "/folder";
            // }}
            // onError={() => {
            //   alert("회원가입에 실패했습니다.");
            // }}
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
                validate: {
                  uniqueEmail: async (value: string) => {
                    const res = isEmailUnique(value);
                    const result = await res;
                    return result || "중복된 이메일입니다.";
                  },
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
                pattern: {
                  value: /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}/,
                  message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
                },
                validate: {
                  matchPassword: (value: string) => {
                    const checkPwd = getValues("checkPwd");
                    checkPwd === value
                      ? clearErrors("checkPwd")
                      : setError("checkPwd", {
                          message: "비밀번호가 일치하지 않습니다.",
                        });
                    return;
                  },
                },
              }}
              errors={errors}
            />
            <SignInput
              label="비밀번호 확인"
              name="checkPwd"
              type="password"
              placeholder="비밀번호와 일치하는 값을 입력해 주세요."
              register={register}
              rules={{
                required: "비밀번호가 일치하지 않습니다.",
                validate: {
                  matchPassword: (value: string) => {
                    const password = getValues("password");
                    return (
                      password === value || "비밀번호가 일치하지 않습니다."
                    );
                  },
                },
              }}
              errors={errors}
            />

            <button className={style.formButton}>회원가입</button>
          </Form>
          <SocialSign message="다른 방식으로 가입하기" />
        </div>
      </div>
    )
  );
};

export default SignUp;
