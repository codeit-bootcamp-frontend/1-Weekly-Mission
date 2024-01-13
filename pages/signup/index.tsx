import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";

import fetcher from "@/lib/axios";

import AuthForm from "@/components/SignPage/AuthForm";

import validateField from "@/utils/validateField";
import redirectIfAccessToken from "@/utils/redirectIfAccessToken";
import createFieldErrorHandler from "@/utils/createFieldErrorHandler";
import saveTokens from "@/utils/saveTokens";
import isUsableEmail from "@/utils/isUsableEmail";

import { EMAIL_FIELD_INFO, PW_FIELD_INFO } from "@/constants/constants";

type CheckedEmails = {
  [email: string]: boolean;
};

interface Token {
  accessToken: string;
  refreshToken: string;
}

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    getValues,
  } = useForm<FieldValues>();
  const router = useRouter();
  const [cachedEmails, setCachedEmails] = useState<CheckedEmails>({});
  const fieldErrorHandler = createFieldErrorHandler(setError);

  const onSubmit = async (data: FieldValues) => {
    const { email, password, rePassword } = data;

    if (!email) {
      fieldErrorHandler.setFieldError("email", "이메일을 입력해주세요.");
    }

    if (!password) {
      fieldErrorHandler.setFieldError("password", "비밀번호를 입력해주세요.");
    }

    if (!rePassword) {
      fieldErrorHandler.setFieldError(
        "rePassword",
        "비밀번호 확인을 입력해주세요."
      );
    }

    if (!email || !password || !rePassword) return;

    if (password !== rePassword) {
      fieldErrorHandler.setFieldError("rePassword", "비밀번호가 다릅니다.");
      return;
    }

    if (
      !isUsableEmail({
        email: data.email,
        cachedEmails,
        setCachedEmails,
        fieldErrorHandler,
      })
    )
      return;

    const response = await fetcher<Token>({
      url: "/auth/sign-up",
      method: "post",
      data: { email, password },
    });

    if (!response) {
      fieldErrorHandler.setFieldError("email", "이메일을 확인해주세요.");
      fieldErrorHandler.setFieldError("password", "비밀번호를 확인해주세요.");
      fieldErrorHandler.setFieldError(
        "rePassword",
        "비밀번호 확인을 확인해주세요."
      );
      return;
    }

    const { accessToken, refreshToken } = response.data;

    saveTokens({ accessToken, refreshToken });

    router.push("/folder");
  };

  const validateEmail = async (email: string) => {
    const { fieldName, regex, errorMessageEmpty, errorMessageInvalid } =
      EMAIL_FIELD_INFO;

    const validateResult = validateField({
      setError,
      fieldName,
      value: email,
      regex,
      errorMessageEmpty,
      errorMessageInvalid,
    });

    if (!validateResult) return;

    if (
      !isUsableEmail({
        email,
        cachedEmails,
        setCachedEmails,
        fieldErrorHandler,
      })
    )
      return;
  };

  const validatePassword = (password: string) => {
    const { fieldName, regex, errorMessageEmpty, errorMessageInvalid } =
      PW_FIELD_INFO.signUp;

    validateField({
      setError,
      fieldName,
      value: password,
      regex,
      errorMessageEmpty,
      errorMessageInvalid,
    });
  };

  const validateRePassword = (rePassword: string) => {
    const password = getValues("password");

    if (rePassword !== password) {
      setError("rePassword", { message: "비밀번호가 다릅니다." });
      return;
    }
    setError("rePassword", { message: "" });
  };

  useEffect(() => {
    redirectIfAccessToken(router);
  }, [router]);

  return (
    <>
      <Head>
        <title>SignUp - LinkBrary</title>
      </Head>
      <AuthForm
        type="signUp"
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        validateEmail={validateEmail}
        validatePassword={validatePassword}
        validateRePassword={validateRePassword}
      />
    </>
  );
}

export default SignUp;
