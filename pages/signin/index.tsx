import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";

import AuthForm from "@/components/SignPage/AuthForm";

import validateField from "@/utils/validateField";
import redirectIfAccessToken from "@/utils/redirectIfAccessToken";
import createFieldErrorHandler from "@/utils/createFieldErrorHandler";

import { EMAIL_FIELD_INFO, PW_FIELD_INFO } from "@/constants/constants";
import { useAuthContext } from "@/contexts/AuthContext";
import { useSetUserId } from "@/contexts/UserContext";

function SignIn() {
  const setUserId = useSetUserId();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { login, user } = useAuthContext();

  const fieldErrorHandler = createFieldErrorHandler(setError);

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;
    if (!email) {
      fieldErrorHandler.setFieldError("email", "이메일을 입력해주세요.");
    }

    if (!password) {
      fieldErrorHandler.setFieldError("password", "비밀번호를 입력해주세요.");
    }

    if (!email || !password) {
      return;
    }

    const response = await login({ email, password });

    if (!response) {
      fieldErrorHandler.setFieldError("email", "이메일을 확인해주세요.");
      fieldErrorHandler.setFieldError("password", "비밀번호를 확인해주세요.");

      return;
    }

    if (!user?.id) return;

    const userId = user.id.toString();

    localStorage.setItem("userId", userId);

    router.push(`/folder/all`);
  };

  const validateEmail = (email: string) => {
    const { fieldName, regex, errorMessageEmpty, errorMessageInvalid } =
      EMAIL_FIELD_INFO;

    validateField({
      setError,
      fieldName,
      value: email,
      regex,
      errorMessageEmpty,
      errorMessageInvalid,
    });
  };

  const validatePassword = (password: string) => {
    const { fieldName, errorMessageEmpty } = PW_FIELD_INFO.signIn;

    validateField({
      setError,
      fieldName,
      value: password,
      errorMessageEmpty,
    });
  };

  useEffect(() => {
    redirectIfAccessToken(router);
  }, [router]);

  return (
    <>
      <Head>
        <title>SignIn - LinkBrary</title>
      </Head>
      <AuthForm
        type="signIn"
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        validateEmail={validateEmail}
        validatePassword={validatePassword}
      />
    </>
  );
}

export default SignIn;
