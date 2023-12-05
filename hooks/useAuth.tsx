import postSign from "@/API/postSign";
import { useRouter } from "next/router";
import { Dispatch, FormEvent, SetStateAction } from "react";

type useInput = {
  value: string;
  setErrorText: Dispatch<SetStateAction<string>>;
};

interface Props {
  email: useInput;
  password: useInput;
  signType: string;
}

const useAuth = ({ email, password, signType }: Props) => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: email.value,
      password: password.value,
    };

    try {
      const res = await postSign(signType, data);

      localStorage.setItem("accessToken", res.result.data.accessToken);
      localStorage.setItem("refreshToken", res.result.data.refreshToken);

      document.cookie = `accessToken=${res.result.data.accessToken}`;

      return router.push("/folder");
    } catch (error) {
      email.setErrorText("이메일을 확인해주세요");
      password.setErrorText("비밀번호를 확인해주세요");
    }
  };

  return { handleSubmit };
};

export default useAuth;
