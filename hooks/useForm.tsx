import fetcher from "@/apis/instance";
import { accessTokenAtom, refreshTokenAtom } from "@/jotai/atomStation";
import { Token } from "@/types/server.type";
import { UseInput } from "@/types/client.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { useRouter } from "next/router";

const useForm = ({
  email,
  password,
  type,
}: {
  email: UseInput;
  password: UseInput;
  passwordCheck?: UseInput;
  type: string;
}) => {
  const router = useRouter();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setRefreshToken = useSetAtom(refreshTokenAtom);
  const queryClient = useQueryClient();

  const dataSet = { email: email.input.value, password: password.input.value };

  const signMutation = useMutation({
    mutationFn: () => fetcher<Token>({ method: "post", url: `/auth/sign-${type}`, data: dataSet }),
    onSuccess: (data) => {
      const access = data.data.accessToken;
      const refresh = data.data.refreshToken;

      setAccessToken(access);
      setRefreshToken(refresh);

      document.cookie = `accessToken=${access}`;
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      router.push("/folder");
    },
    onError: () => {
      const errorText = " 확인해주세요";
      email.wrapper.setErrorText(`이메일을 ${errorText}`);
      password.wrapper.setErrorText(`비밀번호를 ${errorText}`);
    },
  });

  return signMutation;
};

export default useForm;
