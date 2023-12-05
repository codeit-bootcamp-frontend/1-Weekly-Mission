import postSign from "@/API/postSign";
import { NextRouter } from "next/router";
import { Dispatch, FormEvent, SetStateAction } from "react";

type useInput = {
  value: string;
  setErrorText: Dispatch<SetStateAction<string>>;
};

interface Props {
  email: useInput;
  password: useInput;
  signType: "up" | "in";
  router: NextRouter;
}

const handleSignSubmit = ({ email, password, signType, router }: Props) => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: email.value,
      password: password.value,
    };

    try {
      const {
        result: {
          data: { accessToken, refreshToken },
        },
      } = await postSign(signType, data);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      document.cookie = `accessToken=${accessToken}`;

      return router.push("/folder");
    } catch (error) {
      email.setErrorText("이메일을 확인해주세요");
      password.setErrorText("비밀번호를 확인해주세요");
    }
  };

  return handleSubmit;
};

export default handleSignSubmit;
