import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { postSignin } from "@/apis/postSignin.api";
import { ERROR_MESSAGE } from "@/constants/validation";
import { folderPage } from "@/constants/router";
import {
  localStorageAccessToken,
  localStorageRefreshToken,
} from "@/constants/localStorage";
import LocalStorage from "@/utils/localStorage";

const useSignin = () => {
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
    const { email, password } = data;
    try {
      const { data } = await postSignin({ email, password });
      LocalStorage.setItem(localStorageAccessToken, data.data.accessToken);
      LocalStorage.setItem(localStorageRefreshToken, data.data.refreshToken);
      router.push(folderPage);
    } catch {
      setError("email", { message: ERROR_MESSAGE.email.fail });
      setError("password", { message: ERROR_MESSAGE.password.fail });
    }
  };

  return { handleSubmit, register, errors, onSubmit };
};

export default useSignin;
