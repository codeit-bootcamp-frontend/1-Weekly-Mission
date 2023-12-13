import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { fetchSignin } from "@/api/signin.api";
import { ERROR_MESSAGE } from "@/constants/validation";
import { folderPage } from "@/constants/router";
import { localStorageAccessToken } from "@/constants/localStorage";

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
      const { data } = await fetchSignin({ email, password });
      localStorage.setItem(localStorageAccessToken, data.accessToken);
      router.push(folderPage);
    } catch {
      setError("email", { message: ERROR_MESSAGE.email.fail });
      setError("password", { message: ERROR_MESSAGE.password.fail });
    }
  };

  return { handleSubmit, register, errors, onSubmit };
};

export default useSignin;
