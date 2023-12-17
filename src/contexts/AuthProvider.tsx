/*
  NOTE - 지금 user에 저장하는 값은 아래 형태와 같은 데이터다!!
    {
      "id": 25,
      "created_at": "2023-08-31T02:18:03.139213+00:00",
      "name": "온우림",
      "image_source": "https://avatars.githubusercontent.com/u/75120340",
      "email": "test@codeit.com",
      "auth_id": "955801a8-85c5-4672-b729-612e646a640a"
    }
*/
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { axiosInstance } from "@/api/axiosInstance";
import { getSignIn } from "@/api";
import { useRouter } from "next/router";
import { UserInterface } from "@/types";

interface INT {
  user: any;
  isPending: boolean;
  login: any;
  logout: any;
}

const initial: INT = {
  user: null,
  isPending: true,
  login: () => {},
  logout: () => {},
};
export const AuthContext = createContext(initial);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<{
    user: UserInterface | null;
    isPending: boolean;
  }>({
    user: null,
    isPending: true,
  });

  // 유저 데이터를 가져오는 함수.
  /* TODO - 지금은 토큰을 request body로 보내주기 때문에 getMe 인자로 토큰을 받지만,
    나중에 set-cookies로 토큰을 받아 브라우저가 자동으로 저장하게 된다면 해당 인자를 없애버리자.
  */
  async function getMe() {
    setValues((prev) => ({ ...prev, isPending: true }));
    let nextUser: UserInterface;
    try {
      const res = await axiosInstance.get("/users");
      nextUser = res.data;
      setValues((prev) => ({
        ...prev,
        user: nextUser,
        isPending: false,
      }));
    } catch {
      return;
    }
  }

  // 로그인 함수. 로그인하면 해당 유저 정보를 post 리퀘를 보낸다.
  // data 안에 accessToken과 refreshToken 이 있다.
  // 전역 변수 context.user의 값을 getMe로 업데이트해야 한다.
  async function login(email = "", password = "") {
    const { data } = await getSignIn(email, password);
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    await getMe();
  }

  // TODO - 로그아웃 함수. 로그아웃하면 해당 유저 정보를 delete 리퀘를 보낸다. 어라 로그아웃 api 보내는 곳이 없네...
  async function logout() {
    setValues((prev) => ({
      ...prev,
      user: null,
      isPending: false,
    }));
  }

  // TODO - 나중에 setting 페이지도 만들 수 있음 만들어보자.
  // async function updateMe(){}

  return (
    <AuthContext.Provider
      value={{ user: values.user, isPending: values.isPending, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 유저 인증이 필요한 페이지에선 required true 값을 주고,
// required가 false인데 context.user 값이 없고 로딩 중이 아니라면 로그인 페이지로 이동시킨다.
export function useAuth(required = false) {
  const context = useContext(AuthContext);
  console.log(context);
  const router = useRouter();
  if (!context) {
    throw new Error("반드시 AuthProvider 안에서 사용해야 합니다.");
  }

  useEffect(() => {
    if (
      router.route !== "/signup" &&
      required &&
      !context.isPending &&
      !context.user
    ) {
      router.push("/signin");
    }
  }, [context.user, context.isPending, required]);

  return context;
}
