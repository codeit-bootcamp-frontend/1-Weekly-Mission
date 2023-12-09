import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { fetchSignin } from "@/api/signin.api";
import { ERROR_MESSAGE } from "@/constants/validation";

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
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/folder");
    } catch {
      setError("email", { message: ERROR_MESSAGE.email.fail });
      setError("password", { message: ERROR_MESSAGE.password.fail });
    }
  };

  return { handleSubmit, register, errors, onSubmit };
};

export default useSignin;
