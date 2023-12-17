import { useRouter } from "next/router";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import { AxiosError, isAxiosError } from "axios";
import axios from "@/lib/utils/axiosInstance";
import {
  checkLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "./localStorage";

interface loginState {
  isLogin: boolean;
  userEmail: string;
  image_source: string;
  login: (
    email: string,
    password: string,
    setEmailValue: (value: SetStateAction<Value>) => void,
    setPasswordValue: (value: SetStateAction<Value>) => void
  ) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    setEmailValue: (value: SetStateAction<Value>) => void,
    setPasswordValue: (value: SetStateAction<Value>) => void,
    setIsOverlap: (value: SetStateAction<boolean>) => void
  ) => Promise<void>;
  logOut: () => void;
}

interface Props {
  children: ReactNode;
}

interface Value {
  value: string;
  errMsg: string;
}

export const AuthContext = createContext<loginState | null>({
  isLogin: false,
  userEmail: "",
  image_source: "",
  login: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  logOut: () => {},
});

export function AuthProvider({ children }: Props) {
  const [values, setValues] = useState({
    isLogin: false,
    userEmail: "",
    image_source: "",
  });

  const getMe = async () => {
    const response = await axios.get("/users");
    const {
      data: [{ image_source, email }],
    } = response.data;
    const user_image = image_source;
    const user_Email = email;
    setValues((prevValues) => ({
      ...prevValues,
      userEmail: user_Email,
      image_source: user_image,
    }));
  };

  const login = async (
    email: string,
    password: string,
    setEmailValue: (value: SetStateAction<Value>) => void,
    setPasswordValue: (value: SetStateAction<Value>) => void
  ) => {
    try {
      const response = await axios.post("/sign-in", {
        email,
        password,
      });
      const {
        data: { accessToken },
      } = response.data;
      setValues((prev) => ({
        ...prev,
        isLogin: true,
        userEmail: email,
      }));
      setLocalStorage(accessToken);
      await getMe();
    } catch {
      setEmailValue((prev: { value: string; errMsg: string }) => ({
        ...prev,
        errMsg: "이메일을 확인해주세요.",
      }));
      setPasswordValue((prev: { value: string; errMsg: string }) => ({
        ...prev,
        errMsg: "비밀번호를 확인해주세요.",
      }));
      setValues((prev) => ({
        ...prev,
        isLogin: false,
      }));
    }
  };

  const signUp = async (
    email: string,
    password: string,
    setEmailValue: (value: SetStateAction<Value>) => void,
    setPasswordValue: (value: SetStateAction<Value>) => void,
    setIsOverlap: (value: SetStateAction<boolean>) => void
  ) => {
    try {
      const response = await axios.post("/sign-up", {
        email,
        password,
      });
      const {
        data: { accessToken },
      } = response.data;
      setValues((prev) => ({
        ...prev,
        isLogin: true,
        userEmail: email,
      }));
      setLocalStorage(accessToken);
      await getMe();
    } catch (err) {
      if (isAxiosError<AxiosError>(err)) {
        const errMsg = err.response?.data.message as string;
        setEmailValue((prev: { value: string; errMsg: string }) => ({
          ...prev,
          errMsg: errMsg,
        }));
        setPasswordValue((prev: { value: string; errMsg: string }) => ({
          ...prev,
          errMsg: errMsg,
        }));
        setIsOverlap(true);
        setValues((prev) => ({
          ...prev,
          isLogin: false,
        }));
      }
    }
  };

  const logOut = () => {
    removeLocalStorage();
    setValues((prev) => ({
      ...prev,
      isLogin: false,
    }));
  };

  useEffect(() => {
    const isLogin = checkLocalStorage();
    setValues((prev) => ({
      ...prev,
      isLogin: isLogin,
    }));
    if (isLogin) getMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin: values.isLogin,
        userEmail: values.userEmail,
        image_source: values.image_source,
        login,
        signUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useLogin(required?: boolean) {
  const context = useContext(AuthContext);
  const router = useRouter();
  if (!context) {
    throw new Error("LoginContext 안에서 써야 합니다");
  }

  useEffect(() => {
    if (required && !checkLocalStorage() && !context.isLogin) {
      router.push("/signin");
    }
  }, [context.isLogin, required, router]);

  return context;
}
