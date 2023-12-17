import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { fetchCheckEmail } from "@/apis/checkEmail.api";
import { fetchSignup } from "@/apis/signup.api";
import {
  ERROR_MESSAGE,
  ERROR_MESSAGE_PASSWORD_PASSWORD_CONFIRM,
} from "@/constants/validation";
import { folderPage } from "@/constants/router";
import {
  localStorageAccessToken,
  localStorageRefreshToken,
} from "@/constants/localStorage";

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

    try {
      // 이메일 중복 확인
      await fetchCheckEmail({ email });

      // 회원가입
      const { data } = await fetchSignup({ email, password });
      localStorage.setItem(localStorageAccessToken, data.accessToken);
      localStorage.setItem(localStorageRefreshToken, data.refreshToken);
      router.push(folderPage);
    } catch (e) {
      let message;
      if (e instanceof Error) message = e.message;
      else message = String(e);

      if (message === "409이미 존재하는 이메일입니다.") {
        setError("email", { message: message.slice(3) });
      } else {
        setError("email", { message: ERROR_MESSAGE.email.fail });
        setError("password", { message: ERROR_MESSAGE.password.fail });
        setError("passwordConfirm", {
          message: ERROR_MESSAGE.passwordConfirm.fail,
        });
      }
    }
  };

  return { handleSubmit, register, errors, onSubmit };
};

export default useSignup;
