import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { fetchCheckEmail } from "@/api/checkEmail.api";
import { fetchSignup } from "@/api/signup.api";
import {
  ERROR_MESSAGE,
  ERROR_MESSAGE_PASSWORD_PASSWORD_CONFIRM,
} from "@/constants/validation";

const useSignup = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password, passwordConfirm } = data;

    // 비밀번호와 비밀번호 확인 일치 validation
    if (password !== passwordConfirm) {
      setError("passwordConfirm", {
        message: ERROR_MESSAGE_PASSWORD_PASSWORD_CONFIRM,
      });
      return;
    }

    // 이메일 중복 확인
    try {
      await fetchCheckEmail({ email });
    } catch (e) {
      let message;
      if (e instanceof Error) message = e.message;
      else message = String(e);
      if (message.slice(0, 3) === "409") {
        setError("email", { message: message.slice(3) });
      } else {
        setError("email", { message: ERROR_MESSAGE.email.fail });
      }
      setError("password", { message: ERROR_MESSAGE.password.fail });
      setError("passwordConfirm", {
        message: ERROR_MESSAGE.passwordConfirm.fail,
      });
    }

    // 회원가입
    try {
      const { data } = await fetchSignup({ email, password });
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/folder");
    } catch (e) {
      console.log(e); // 무슨 에러인가
    }
  };

  return { handleSubmit, register, errors, onSubmit };
};

export default useSignup;
